import { bootstrap }    from '@angular/platform-browser-dynamic';
import { FormComponent } from './form.component';
import {OfferComponent} from './offer/offer.component';

bootstrap(FormComponent);
window.app = bootstrap(OfferComponent);

