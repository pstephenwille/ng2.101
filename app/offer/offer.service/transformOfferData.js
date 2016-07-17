define('transformOfferData', ['underscore'], function (_) {
    return self = {
        adaptOffers: function (response, ts) {
            try {
                var self = this;
                var roomsAndRatesData = response.rnrData;
                var infositeData = response.infositeData;
                var modelData = {
                    ts: ts,
                    isThereABookableOffer: false,
                    isHotelSoldOut: !!response.hotelSoldOut, // coerce undefined to false
                    fromStayDate: response.fromStayDate,
                    toStayDate: response.toStayDate,
                    formattedFromStayDate: response.formattedFromStayDate,
                    formattedToStayDate: response.formattedToStayDate,
                    numOfNightsRestriction: response.numOfNightsRestriction,
                    rooms: [],
                    isVipAccess: true,
                    displayTaapContent: true,
                    taapCommission: response.ajaxTaapModel,
                    showTaapAirAttach: true,
                    exp: response.experiments
                };
                /* Hierarchical rooms & rates */
                /* won't work in modelData declaration */
                modelData.displayExpediaRewardsColumn = roomsAndRatesData.displayExpediaRewardsColumn;
                modelData.descripColspan = (roomsAndRatesData.displayExpediaRewardsColumn) ? 5 : 4;
                //modelData.rooms = roomsAndRatesData.rooms;

                _.each(response.offers || [], function (offer, index) {

                    //TODO: remove this call and move to Java layer.
                    //self.fixPrices(offer.price);

                    //TODO: fix in the Java layer
                    /*
                     if (offer.bookable && _.isEmpty(offer.price)) {
                     offer.bookable = false;
                     }
                     */

                    //TODO: Looks like a loop within a loop.  This could be refactored for efficiency.
                    var roomData = _.filter(modelData.rooms, function (room) {
                        // The room type codes now have the same datatypes on the server side.
                        return room.roomTypeCode === offer.roomTypeCode;
                    });

                    // If this is the first instance of this room in the response, add it to the model data.
                    if (roomData.length === 0) {
                        // Pull the room information.
                        roomData = _.filter(roomsAndRatesData.rooms, function (room) {
                            // The room type codes now have the same datatypes on the server side.
                            return room.roomTypeCode === offer.roomTypeCode;
                            //return room.name.match(/^[^x]/i);
                        });

                        if (roomData.length > 0) {
                            modelData.rooms.push(roomData[0]);
                            roomData = modelData.rooms[modelData.rooms.length - 1];
                        }
                        else {
                            // TODO: How to handle the case where there was no room data for this offer?
                            roomData = {
                                name: offer.roomName
                            };
                            modelData.rooms.push(roomData);
                        }
                        roomData.offers = [];
                    } else {
                        roomData = roomData[0];
                    }

                    // HACK: Override dates to fix 5r5 soak.
                    offer.checkInDate = response.travelerData.chkin;
                    offer.checkOutDate = response.travelerData.chkout;

                    offer.maxChildren = roomData.maxChildren;
                    offer.maxGuests = roomData.maxGuests;
                    roomData.maxOccupancyValid = (offer.maxGuests > 0) && (offer.maxAdults > 0);
                    roomData.isMaxGuestsSingular = (offer.maxGuests === 1);
                    roomData.isMaxChildrenSingular = (offer.maxChildren === 1);

                    // Free cancellation
                    offer.isGDS = (offer.offerType === "PEGASUS" || offer.offerType === "WORLDSPAN");
                    offer.cancellationMsg_1 = (offer.outsideWindowPrice && offer.nonRefundableInsideWindow && offer.isGDS);
                    offer.cancellationMsg_1_v2 = (offer.outsideWindowPrice && offer.nonRefundableInsideWindow && !offer.isGDS);
                    offer.cancellationMsg_2 = (offer.outsideWindowPrice && !offer.nonRefundableInsideWindow && (offer.insideWindowPenaltyNightCount > 2) && offer.isGDS);
                    offer.cancellationMsg_2_v2 = (offer.outsideWindowPrice && !offer.nonRefundableInsideWindow && (offer.insideWindowPenaltyNightCount > 2) && !offer.isGDS);
                    offer.cancellationMsg_3 = (offer.outsideWindowPrice && !offer.nonRefundableInsideWindow && (offer.insideWindowPenaltyNightCount === 2) && offer.isGDS);
                    offer.cancellationMsg_3_v2 = (offer.outsideWindowPrice && !offer.nonRefundableInsideWindow && (offer.insideWindowPenaltyNightCount === 2) && !offer.isGDS);
                    offer.cancellationMsg_4 = (offer.outsideWindowPrice && !offer.nonRefundableInsideWindow && (offer.insideWindowPenaltyNightCount > 0) && (offer.insideWindowPenaltyNightCount < 2) && offer.isGDS);
                    offer.cancellationMsg_4_v2 = (offer.outsideWindowPrice && !offer.nonRefundableInsideWindow && (offer.insideWindowPenaltyNightCount > 0) && (offer.insideWindowPenaltyNightCount < 2) && !offer.isGDS);
                    offer.cancellationMsg_5 = (offer.outsideWindowPrice && !offer.nonRefundableInsideWindow && ((offer.insideWindowPenaltyNightCount < 0) || (offer.insideWindowPenaltyNightCount === 0)) && (offer.insideWindowPenaltyPercentage > 0) && offer.isGDS);
                    offer.cancellationMsg_5_v2 = (offer.outsideWindowPrice && !offer.nonRefundableInsideWindow && ((offer.insideWindowPenaltyNightCount < 0) || (offer.insideWindowPenaltyNightCount === 0)) && (offer.insideWindowPenaltyPercentage > 0) && offer.isGDS);
                    offer.cancellationMsg_6 = (offer.outsideWindowPrice && !offer.nonRefundableInsideWindow && ((offer.insideWindowPenaltyNightCount < 0) || (offer.insideWindowPenaltyNightCount === 0)) && ((offer.insideWindowPenaltyPercentage < 0) || (offer.insideWindowPenaltyPercentage === 0)) && offer.isGDS);
                    offer.cancellationMsg_6_v2 = (offer.outsideWindowPrice && !offer.nonRefundableInsideWindow && ((offer.insideWindowPenaltyNightCount < 0) || (offer.insideWindowPenaltyNightCount === 0)) && ((offer.insideWindowPenaltyPercentage < 0) || (offer.insideWindowPenaltyPercentage === 0)) && !offer.isGDS);
                    offer.cancellationMsg_7 = (!offer.outsideWindowPrice && offer.nonRefundableInsideWindow && offer.isGDS);
                    offer.cancellationMsg_7_v2 = (!offer.outsideWindowPrice && offer.nonRefundableInsideWindow && !offer.isGDS);
                    offer.cancellationMsg_8 = (!offer.outsideWindowPrice && !offer.nonRefundableInsideWindow && (offer.insideWindowPenaltyNightCount > 2) && offer.isGDS);
                    offer.cancellationMsg_8_v2 = (!offer.outsideWindowPrice && !offer.nonRefundableInsideWindow && (offer.insideWindowPenaltyNightCount > 2) && !offer.isGDS);
                    offer.cancellationMsg_9 = (!offer.outsideWindowPrice && !offer.nonRefundableInsideWindow && (offer.insideWindowPenaltyNightCount === 2) && offer.isGDS);
                    offer.cancellationMsg_9_v2 = (!offer.outsideWindowPrice && !offer.nonRefundableInsideWindow && (offer.insideWindowPenaltyNightCount === 2) && !offer.isGDS);
                    offer.cancellationMsg_10 = (!offer.outsideWindowPrice && !offer.nonRefundableInsideWindow && (offer.insideWindowPenaltyNightCount > 0) && (offer.insideWindowPenaltyNightCount < 2) && offer.isGDS);
                    offer.cancellationMsg_10_v2 = (!offer.outsideWindowPrice && !offer.nonRefundableInsideWindow && (offer.insideWindowPenaltyNightCount > 0) && (offer.insideWindowPenaltyNightCount < 2) && !offer.isGDS);
                    offer.cancellationMsg_11 = (!offer.outsideWindowPrice && !offer.nonRefundableInsideWindow && ((offer.insideWindowPenaltyNightCount < 0) || (offer.insideWindowPenaltyNightCount === 0)) && (offer.insideWindowPenaltyPercentage > 0) && offer.isGDS);
                    offer.cancellationMsg_11_v2 = (!offer.outsideWindowPrice && !offer.nonRefundableInsideWindow && ((offer.insideWindowPenaltyNightCount < 0) || (offer.insideWindowPenaltyNightCount === 0)) && (offer.insideWindowPenaltyPercentage > 0) && offer.isGDS);
                    offer.cancellationMsg_12 = (!offer.outsideWindowPrice && !offer.nonRefundableInsideWindow && ((offer.insideWindowPenaltyNightCount < 0) || (offer.insideWindowPenaltyNightCount === 0)) && ((offer.insideWindowPenaltyPercentage < 0) || (offer.insideWindowPenaltyPercentage === 0)));
                    offer.cancellationMsg_13 = (offer.refundable && offer.nonRefundableInsideWindow && offer.isGDS);

                    if (typeof offer.amenities !== 'undefined' && typeof roomData.amenities !== 'undefined') {
                        // Freebies
                        // Merge offer-level free amenities with room-level free amenities.
                        // TODO: Revisit if this should be done in Java - I think the data comes from different places, making this necessary here.
                        // Breakfast info
                        // Inclusive Breakfast
                        offer.breakfastType_1 = self.isAmenitiesExistEx(roomData, offer, [2111, 2085, 4363, 2102], [512, 2111, 2085, 4363, 1, 2102]);
                        // Full board  breakfast
                        offer.breakfastType_2 = !offer.breakfastType_1 && self.isAmenitiesExistEx(roomData, offer, [2207], [2207, 67108864]);
                        // Half board breakfast
                        offer.breakfastType_3 = !offer.breakfastType_1 && !offer.breakfastType_2 && self.isAmenitiesExistEx(roomData, offer, [2206], [33554432, 2206]);
                        // Free Breakfast for 2
                        offer.breakfastType_4 = !offer.breakfastType_1 && !offer.breakfastType_2 && !offer.breakfastType_3 && self.isAmenitiesExistEx(roomData, offer, [2194, 2193], [8192, 2194, 4096, 2193]);
                        // Free Breakfast
                        offer.breakfastType_5 = !offer.breakfastType_1 && !offer.breakfastType_2 && !offer.breakfastType_3 && !offer.breakfastType_4 && self.isAmenitiesExistEx(roomData, offer, [2205, 2103, 2105, 2104, 2001], [1073742786, 16777216, 2205, 2, 2103, 8, 2105, 4, 2104, 2001]);
                        // Free breakfast buffet
                        offer.breakfastType_6 = !offer.breakfastType_1 && !offer.breakfastType_2 && !offer.breakfastType_3 && !offer.breakfastType_4 && !offer.breakfastType_5
                            && self.isAmenitiesExist(roomData, [3969, 4647, 4651]);
                        // Free breakfast continental
                        offer.breakfastType_7 = !offer.breakfastType_1 && !offer.breakfastType_2 && !offer.breakfastType_3 && !offer.breakfastType_4 && !offer.breakfastType_5 && !offer.breakfastType_6
                            && self.isAmenitiesExist(roomData, [4646]);
                        // Free hot breakfast
                        offer.breakfastType_8 = !offer.breakfastType_1 && !offer.breakfastType_2 && !offer.breakfastType_3 && !offer.breakfastType_4 && !offer.breakfastType_5 && !offer.breakfastType_6 && !offer.breakfastType_7
                            && self.isAmenitiesExist(roomData, [4648, 4649, 4650]);
                        offer.freeBreakfast = offer.breakfastType_1 || offer.breakfastType_2 || offer.breakfastType_3 || offer.breakfastType_4 || offer.breakfastType_5 || offer.breakfastType_6 || offer.breakfastType_7 || offer.breakfastType_8;

                        // Free Parking
                        offer.freeParking = self.isAmenitiesExistEx(roomData, offer, [2109, 2011, 3861, 4449, 4447, 4445, 4443, 2195, 3863], [128, 2109, 2011, 3861, 4449, 4447, 4445, 4443, 2195, 3863, 16384]);

                        // Free Internet
                        offer.freeInternet = self.isAmenitiesExistEx(roomData, offer, [2192, 4347, 2403, 2191, 4345, 2405, 2407, 4154], [2192, 2048, 4347, 2403, 1024, 1073742787, 2191, 4345, 2405, 2407, 4154]);

                        // Other Value Adds
                        offer.foodBeverageCredit = self.isAmenitiesExist(offer, [64, 2108]);
                        offer.freeAirportParking = self.isAmenitiesExist(offer, [256, 2110]);
                        offer.freeAirportShuttle = self.isAmenitiesExist(offer, [32768, 2196]);
                        offer.freeRoomUpgrade = self.isAmenitiesExist(offer, [65536, 2197]);
                        offer.resortCreditIncluded = self.isAmenitiesExist(offer, [131072, 2198]);
                        offer.welcomeGiftUponArrival = self.isAmenitiesExist(offer, [262144, 2199]);
                        offer.spaCredit = self.isAmenitiesExist(offer, [524288, 2200]);
                        offer.golfCredit = self.isAmenitiesExist(offer, [1048576, 2201]);
                        offer.VIPLineAccessToNightclub = self.isAmenitiesExist(offer, [2097152, 2202]);
                        offer.freeSkiLiftTicketAndRental = self.isAmenitiesExist(offer, [8388608, 2204]);
                        offer.slotPlay = self.isAmenitiesExist(offer, [268435456, 2234]);
                        offer.casinoCredit = self.isAmenitiesExist(offer, [536870912, 2235]);
                        offer.matchPlay = self.isAmenitiesExist(offer, [1073741824, 2236]);
                        offer.DisneyTickets = self.isAmenitiesExist(offer, [1073742617]);
                        offer.spaAccess = self.isAmenitiesExist(offer, [1073742618]);


                        // Begin 10532: HIS_DisplayBreakInternetFees
                        offer.displayNewAmenities = infositeData.isFrenchPOSa || true;

                        offer.noBreakfastInfo = false;
                        offer.breakfastIncluded = false;
                        offer.breakfastSurcharge = false;

                        offer.noInternetInfo = false;
                        offer.newFreeInternet = false;
                        offer.InternetSurcharge = false;

                        if (offer.displayNewAmenities) {
                            // New breakfast amenities
                            if (!offer.freeBreakfast) {
                                offer.breakfastIncluded = roomsAndRatesData.isBreakfastIncludedAtProperty;
                                offer.breakfastSurcharge = roomsAndRatesData.isBreakfastSurchargeAtProperty;
                                if (!offer.breakfastIncluded && !offer.breakfastSurcharge) {
                                    offer.noBreakfastInfo = true;
                                }
                            }

                            // New Internet amenities
                            if (!offer.freeInternet) {
                                offer.newFreeInternet = roomsAndRatesData.isNewFreeInternetAtProperty;
                                offer.InternetSurcharge = self.isAmenitiesExistEx(roomData, offer, [4155, 4346, 4348], [2404, 2406, 2408, 1073742908]) || roomsAndRatesData.isInternetSurchargeAtProperty;
                                if (!offer.newFreeInternet && !offer.InternetSurcharge) {
                                    offer.noInternetInfo = true;
                                }
                            }
                        }
                        // End   10532: HIS_DisplayBreakInternetFees
                    }
                    // "Special Deal" (Rate plan description)
                    if (typeof roomData.ratePlans !== 'undefined') {
                        for (var i = 0; i < roomData.ratePlans.length; i++) {
                            if (roomData.ratePlans[i].ratePlanCode === offer.ratePlanCode) {
                                offer.hasRatePlanDescription = true;
                                offer.ratePlanDescription = roomData.ratePlans[i].ratePlanDescription;
                            }
                        }
                    }

                    offer.brandName = self.brandName;

                    // TODO: Where can we get _n room thumbnails in Java?
                    if (roomData.photos && roomData.photos.length > 0 && roomData.photos[0].thumbnailUrl) {
                        roomData.photos[0].thumbnailUrl = roomData.photos[0].thumbnailUrl.replace("_t", "_n");
                    }

                    roomData.offers.push(offer);
                    roomData.offerCount = roomData.offers.length;

                    // Expedia Rewards
                    offer.displayExpediaRewards = offer.bookable && modelData.displayExpediaRewardsColumn;
                    offer.displayTaapContent = offer.bookable && modelData.displayTaapContent;
                    offer.isTaap = {
                        ESR: offer.offerType === "MERCHANT",
                        EEM: offer.offerType === "VENERE" || offer.offerType === "DIRECT_AGENCY" || offer.offerType === "JUMBOTOURS",
                        GDS: offer.offerType === "PEGASUS" || offer.offerType === "WORLDSPAN"
                    };
                    offer.commission = {
                        ESR: modelData.taapCommission.esr,
                        EEM: modelData.taapCommission.eem,
                        GDS: modelData.taapCommission.gds
                    };
                    offer.isVipAccess = modelData.isVipAccess;
                    // Begin 7936: PwPRewardsUI
                    // Begin 8623: HotelIS_PayWithPoints
                    offer.isPwPRewardsMsg = true;
                    if (typeof roomData.rewardsPoints !== 'undefined') {
                        offer.confirmedPoints = roomData.rewardsPoints;
                    } else {
                        offer.confirmedPoints = 0;
                    }
                    offer.belowRedemptionFloor = offer.confirmedPoints < 3500;
                    offer.redemptionValueForESRHotel = Math.round((offer.confirmedPoints * 0.00714) * 100) / 100;
                    offer.redemptionValueForVIPAccessHotel = Math.round((offer.confirmedPoints * 0.01429) * 100) / 100;
                    // End   7936: PwPRewardsUI
                    // End   8623: HotelIS_PayWithPoints


                    if (offer.showRoomsLeftMessage) {
                        offer.isNumberOfRoomsLeftSingular = (offer.numberOfRoomsLeft === 1);
                    }

                    if (offer.nightlyRates) {
                        offer.showNightlyRates = (offer.nightlyRates.length > 0);
                    }

                    // DRR expiration
                    if (typeof offer.drrExpirationSecs !== 'undefined') {
                        offer.hasDrrExpiration = (offer.drrExpirationSecs > 600 || offer.drrExpirationSecs === 600);
                        offer.drrExpirationSecsText = offer.drrExpirationSecs.toString();
                    }
                    var SECS_PER_HR = 60 * 60;
                    offer.drrExpiration_1 = (offer.drrExpirationSecs > 600 || offer.drrExpirationSecs === 600) && (offer.drrExpirationSecs < (2 * SECS_PER_HR));
                    offer.drrExpiration_2 = (offer.drrExpirationSecs > (2 * SECS_PER_HR) || offer.drrExpirationSecs === (2 * SECS_PER_HR)) && (offer.drrExpirationSecs < (48 * SECS_PER_HR));
                    offer.drrExpiration_3 = (offer.drrExpirationSecs > (48 * SECS_PER_HR) || offer.drrExpirationSecs === (48 * SECS_PER_HR)) && (offer.drrExpirationSecs < (96 * SECS_PER_HR));
                    offer.drrExpiration_4 = (offer.drrExpirationSecs > (96 * SECS_PER_HR) || offer.drrExpirationSecs === (96 * SECS_PER_HR));

                    // Begin 9366: Tonight only DRR
                    offer.showTonightOnlyBadge = offer.tonightOnlyDRRPresent;
                    // End 9366: Tonight only DRR

                    offer.isResortFeeEnabled = infositeData.isResortFeeEnabled;

                    offer.showTaapAirAttach = offer.bookable && response.airAttachEnabled && response.taapPackageRateEnabled && modelData.showTaapAirAttach;
                    // TODO: Is it possible that a bookable offer doesn't have a price?

                });

                //return self.adaptEtp(modelData, false);
                return self.sortAndIndex(modelData);
                //return modelData;
            } catch (e) {
                console.log('....adaptOffers error ', e, arguments);
            }


        },

        adaptEtp: function (modelData, suppressETP) {
            var rooms = modelData.rooms;
            modelData.hasDeposit = false;
            try {
                for (var roomIndex = 0; roomIndex < rooms.length; roomIndex++) {
                    var offers = rooms[roomIndex].offers;
                    for (var offerIndex = 0; offerIndex < offers.length; offerIndex++) {
                        if (offers[offerIndex].paymentChoiceAvailable) {
                            for (var nestedOfferIndex = 0; nestedOfferIndex < offers.length; nestedOfferIndex++) {

                                // offer in nested loop is pay now, offer in first loop is pay later/deposit if:
                                // offer in nested loop is pay now (not pay later) but offer in first loop is pay later OR both offers are either pay later or both not pay later and offer in nested loop has offer type MERCHANT
                                if (offerIndex !== nestedOfferIndex && offers[offerIndex] // skip if offer in nested loop is the same as offer in first loop
                                    && offers[offerIndex].ratePlanCode === offers[nestedOfferIndex].ratePlanCode // rate plan codes must match
                                    && ((!offers[nestedOfferIndex].payLater && offers[offerIndex].payLater) || ((offers[nestedOfferIndex].payLater === offers[offerIndex].payLater) && offers[nestedOfferIndex].offerType === 'MERCHANT'))) {

                                    if (suppressETP === true) {
                                        // do nothing, fall through to offer removal
                                    } else if (offers[offerIndex].price && offers[offerIndex].price.displayDepositAmount && !offers[offerIndex].showETPDepositChoice) {
                                        // ETP deposit (no choice)
                                        offers[nestedOfferIndex] = offers[offerIndex];
                                        modelData.hasDeposit = true;
                                    } else if (offers[offerIndex].price && offers[offerIndex].price.displayDepositAmount) {
                                        // ETP deposit
                                        offers[nestedOfferIndex].depositOffer = offers[offerIndex];
                                        offers[offerIndex].areCurrenciesDifferent = (offers[offerIndex].currencyPosa !== offers[offerIndex].currencyPosu);
                                        modelData.hasDeposit = true;
                                        if (offers[nestedOfferIndex].depositOffer.currencyPosu === null) {
                                            // temp fix until java fix gets released
                                            offers[nestedOfferIndex].depositOffer.currencyPosu = offers[nestedOfferIndex].depositOffer.currencyPosa;
                                        }
                                    } else {
                                        // ETP pay later
                                        offers[nestedOfferIndex].payLaterOffer = offers[offerIndex];
                                        if (offers[nestedOfferIndex].payLaterOffer.currencyPosu === null) {
                                            // temp fix until java fix gets released
                                            offers[nestedOfferIndex].payLaterOffer.currencyPosu = offers[nestedOfferIndex].payLaterOffer.currencyPosa;
                                        }
                                    }
                                    offers[nestedOfferIndex].roomIndex = roomIndex;
                                    if (offers[offerIndex].isFeaturedOffer) {
                                        offers[nestedOfferIndex].isFeaturedOffer = true;
                                    }

                                    //TODO: This seems very dangerous to modify the array as we loop over it.
                                    offers.splice(offerIndex, 1); // delete offer in first loop as it has been added to the offer in the first loop as pay later/deposit offer
                                    rooms[roomIndex].offerCount = rooms[roomIndex].offerCount - 1;
                                }
                            }
                        }
                    }
                }
                return self.sortAndIndex(modelData);
            } catch (e) {
                console.log('...adaptEtp error ', e);
            }
        },

        sortAndIndex: function (modelData) {
            try {
                var rooms = modelData.rooms;
                var bookButtonIndex = 1;
                var offerIndex = 0;
                var isNullPrice = function (a) {
                    return !(a && a.price && a.price.price) || a.exceedsMaxGuests || a.exceedsMaxAdults;  // Set the price null when exceeding occupancy
                };

                if (rooms.length > 0) {
                    // sort the rooms and offers
                    _.each(rooms, function (room) {
                        // Sort offers by price and place falsey values to bottom
                        if (room.offers && room.offers.length) {
                            room.offers.sort(function (a, b) {
                                if (isNullPrice(a) && isNullPrice(b)) {
                                    return 0;
                                } else if (isNullPrice(a)) {
                                    return 1;
                                } else if (isNullPrice(b)) {
                                    return -1;
                                }
                                return a.price.price - b.price.price;
                            });
                            if (room.offers[0].price && !(room.offers[0].exceedsMaxGuests || room.offers[0].exceedsMaxAdults)) {  // Set the minPrice undefined when exceeding occupancy
                                room.minPrice = room.offers[0].price.price; // Set the min price for each room
                            } else {
                                room.minPrice = undefined;
                            }
                        }
                        room.showBestValue = false;
                        room.isSingleOfferRoom = false;
                    });

                    // Sort rooms by price 'minPrice' place falsey values to bottom
                    rooms = rooms.sort(function (a, b) {
                        if (!a.minPrice && !b.minPrice) {
                            return 0;
                        } else if (!a.minPrice) {
                            return 1;
                        } else if (!b.minPrice) {
                            return -1;
                        }
                        return a.minPrice - b.minPrice;
                    });

                    modelData.isAnyOfferSoldOut = false;
                    modelData.isThereABookableOffer = false;
                    _.each(rooms, function (room) {
                        _.each(room.offers, function (offer, roomOfferIndex) {
                            // set optionIndex (indicates which offer it is in the room, index within room)
                            offer.optionIndex = roomOfferIndex + 1;
                            // set bookButtonIndex (for Omniture tracking of book button, index across rooms)
                            offer.bookButtonIndex = bookButtonIndex++;
                            offer.offerIndex = offerIndex++;
                            // show sold out footnote if there's at least one sold out room
                            if (offer.soldOut) {
                                modelData.isAnyOfferSoldOut = true;

                            }
                            if (offer.bookable) {
                                modelData.isThereABookableOffer = true;
                            }
                        });
                    });

                    rooms[0].offers[0].isFeaturedOffer = true;
                    rooms[0].showBestValue = true;
                    rooms[0].isSingleOfferRoom = rooms[0].offerCount === 1;
                }
                return modelData;
            } catch (e) {
                console.log('...sortIndex error ', e);
            }
        },

        isAmenitiesExist: function (data, list) {
            if (data && list) {
                for (var i = 0; i < list.length; i++) {
                    var id = list[i].toString();
                    if (data.amenities[id]) {
                        return true;
                    }
                }
            }

            return false;
        },

        isAmenitiesExistEx: function (room, offer, list1, list2) {
            return this.isAmenitiesExist(room, list1) || this.isAmenitiesExist(offer, list2);
        }

    }
});
