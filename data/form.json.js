define('formData', function(){
  return [
    {
      "name":"",
        "id": 2,
        "intro": "Devices",
        "questions": [
          {
            "id": "MBAQ6",
            "index": 6,
            "type": "checkbox",
            "text": "Choose all the mobile devices you and your employees use for your business (check all that apply).",
            "answerId": 0,
            "answers": [
              {
                "id": 1,
                "text": "Feature phones (just voice and text).",
                "score": 1
              },
              {
                "id": 2,
                "text": "Smartphones (with Web, email, and/or apps).",
                "score": 2
              },
              {
                "id": 3,
                "text": "Tablets or phablets (smartphones with 5-inch or larger screens).",
                "score": 3
              },
              {
                "id": 4,
                "text": "Ruggedized or other mobile devices.",
                "score": 4
              },
              {
                "id": 5,
                "text": "Hotspots, laptop sticks or other wireless connectivity devices.",
                "score": 5
              }
            ]
          },
          {
            "id": "MBAQ7",
            "index": 7,
            "type": "select",
            "text": "What is the total number of wireless-enabled mobile devices in your business?",
            "answerId": 0,
            "answers": [
              {
                "id": 1,
                "text": "1",
                "score": 0
              },
              {
                "id": 2,
                "text": "2",
                "score": 0
              },
              {
                "id": 3,
                "text": "3",
                "score": 0
              },
              {
                "id": 4,
                "text": "4",
                "score": 0
              },
              {
                "id": 5,
                "text": "5",
                "score": 0
              },
              {
                "id": 6,
                "text": "6",
                "score": 0
              },
              {
                "id": 7,
                "text": "7",
                "score": 0
              },
              {
                "id": 8,
                "text": "8",
                "score": 0
              },
              {
                "id": 9,
                "text": "9",
                "score": 0
              },
              {
                "id": 10,
                "text": "10",
                "score": 0
              },
              {
                "id": 11,
                "text": "11",
                "score": 0
              },
              {
                "id": 12,
                "text": "12",
                "score": 0
              },
              {
                "id": 13,
                "text": "13",
                "score": 0
              },
              {
                "id": 14,
                "text": "14",
                "score": 0
              },
              {
                "id": 15,
                "text": "15",
                "score": 0
              },
              {
                "id": 16,
                "text": "16",
                "score": 0
              },
              {
                "id": 17,
                "text": "17",
                "score": 0
              },
              {
                "id": 18,
                "text": "18",
                "score": 0
              },
              {
                "id": 19,
                "text": "19",
                "score": 0
              },
              {
                "id": 20,
                "text": "20",
                "score": 0
              },
              {
                "id": 21,
                "text": "21",
                "score": 0
              },
              {
                "id": 22,
                "text": "22",
                "score": 0
              },
              {
                "id": 23,
                "text": "23",
                "score": 0
              },
              {
                "id": 24,
                "text": "24",
                "score": 0
              },
              {
                "id": 25,
                "text": "25",
                "score": 0
              },
              {
                "id": 26,
                "text": "25+",
                "score": 0
              }
            ]
          },
          {
            "id": "MBAQ8",
            "index": 8,
            "type": "radio",
            "text": "Do you and your employees use Wi-Fi Calling?",
            "answerId": 0,
            "answers": [
              {
                "id": 1,
                "text": "What is Wi-Fi Calling?",
                "score": 1
              },
              {
                "id": 2,
                "text": "We do not use Wi-Fi Calling.",
                "score": 2
              },
              {
                "id": 3,
                "text": "Some of us use Wi-Fi Calling.",
                "score": 3
              },
              {
                "id": 4,
                "text": "We all use Wi-Fi Calling.",
                "score": 4
              }
            ]
          },
          {
            "id": "MBAQ9",
            "index": 9,
            "type": "radio",
            "text": "Do you use tethering&mdash;using a smartphone as a mobile hotspot to connect to the Internet and share the connection with other tablets or laptops&mdash;while away from the office?",
            "answerId": 0,
            "answers": [
              {
                "id": 1,
                "text": "None of our employees use tethering.",
                "score": 1
              },
              {
                "id": 2,
                "text": "Some of us are set up to use tethering.",
                "score": 2
              },
              {
                "id": 3,
                "text": "All of us use tethering; it's a standard feature of the way we set up our wireless plans.",
                "score": 3
              }
            ]
          },
          {
            "id": "MBAQ10",
            "index": 10,
            "type": "radio",
            "text": "Do you use video conferencing or video applications like WebEx and Skype on mobile devices?",
            "answerId": 0,
            "answers": [
              {
                "id": 1,
                "text": "We don't use video conferencing on our mobile devices.",
                "score": 1
              },
              {
                "id": 2,
                "text": "We sometimes use video conferencing on our mobile devices.",
                "score": 2
              },
              {
                "id": 3,
                "text": "We have a company standard that we use for video conferencing on our mobile devices.",
                "score": 3
              }
            ]
          }
        ]
      }
    /*
      ,{
        "id": 3,
        "intro": "Security & Management",
        "questions": [
          {
            "id": "MBAQ11",
            "index": 11,
            "type": "radio",
            "text": "Do you and your employees have password protection on mobile phones and devices used for business?",
            "answerId": 0,
            "answers": [
              {
                "id": 1,
                "text": "We don't use password protection or PINs on our mobile devices.",
                "score": 1
              },
              {
                "id": 2,
                "text": "We recommend but don't require password protection or a PIN on mobile devices.",
                "score": 2
              },
              {
                "id": 3,
                "text": "We require employees to have password protection or a PIN on all mobile devices they use for work.",
                "score": 3
              }
            ]
          },
          {
            "id": "MBAQ12",
            "index": 12,
            "type": "radio",
            "text": "Do you allow employees to use their personal devices for work?",
            "answerId": 0,
            "answers": [
              {
                "id": 1,
                "text": "We allow employees to use any mobile device for work.",
                "score": 1
              },
              {
                "id": 2,
                "text": "We allow employees to use <strong>approved</strong> personal mobile devices for work.",
                "score": 2
              },
              {
                "id": 3,
                "text": "We have a Bring Your Own Device (BYOD) policy and require our employees to honor it.",
                "score": 3
              },
              {
                "id": 4,
                "text": "We provide employee work devices, therefore personal devices are not allowed.",
                "score": 4
              }
            ]
          },
          {
            "id": "MBAQ13",
            "index": 13,
            "type": "radio",
            "text": "Do you have the remote capability to track, lock, and/or wipeout company-related data on mobile devices that might be lost or stolen?",
            "answerId": 0,
            "answers": [
              {
                "id": 1,
                "text": "We do not have a policy for lost mobile devices.",
                "score": 1
              },
              {
                "id": 2,
                "text": "We recommend employees use an app or service to track and lock their mobile devices in the event they go missing.",
                "score": 2
              },
              {
                "id": 3,
                "text": "We can track, lock, and wipeout data on all mobile devices that go missing using a centralized software tool we manage.  The software isolates business information from the employee's personal information.",
                "score": 3
              }
            ]
          },
          {
            "id": "MBAQ14",
            "index": 14,
            "type": "radio",
            "text": "If you allow your employees to use mobile apps on their smartphones for business, do you have a policy regarding apps on mobile devices? For example: only authorized apps may be used on business devices?",
            "answerId": 0,
            "answers": [
              {
                "id": 1,
                "text": "Employees use their own devices and apps.",
                "score": 1
              },
              {
                "id": 2,
                "text": "Employees are allowed to use mobile apps that are approved by our business.",
                "score": 2
              },
              {
                "id": 3,
                "text": "We have a policy governing mobile apps on mobile devices and, we have the remote capability to authenticate, deploy, remove, or restrict apps from mobile devices.",
                "score": 3
              }
            ]
          },
          {
            "id": "MBAQ15",
            "index": 15,
            "type": "radio",
            "text": "Which industry best describes your business?",
            "answerId": 0,
            "answers": [
              {
                "id": 1,
                "text": "Construction",
                "score": 1
              },
              {
                "id": 2,
                "text": "Healthcare / Social Services",
                "score": 2
              },
              {
                "id": 3,
                "text": "Professional Services / Consulting",
                "score": 3
              },
              {
                "id": 4,
                "text": "Real Estate",
                "score": 4
              },
              {
                "id": 5,
                "text": "Retail",
                "score": 5
              },
              {
                "id": 6,
                "text": "Other",
                "score": 6
              }
            ]
          },
          {
            "id": "MBAQ16",
            "index": 16,
            "type": "radio",
            "text": "How large is your total team?",
            "answerId": 0,
            "answers": [
              {
                "id": 1,
                "text": "1-5",
                "score": 1
              },
              {
                "id": 2,
                "text": "6-10",
                "score": 2
              },
              {
                "id": 3,
                "text": "11-25",
                "score": 3
              },
              {
                "id": 4,
                "text": "25-100",
                "score": 4
              },
              {
                "id": 5,
                "text": "100+",
                "score": 5
              }
            ]
          },
          {
            "id": "MBAQ17",
            "index": 17,
            "type": "radio",
            "text": "What part do you play in developing and implementing your company's mobile strategy?",
            "answerId": 0,
            "answers": [
              {
                "id": 1,
                "text": "I make decisions for the business.",
                "score": 0
              },
              {
                "id": 2,
                "text": "I am a part of a team that evaluates and makes recommendations for the business.",
                "score": 0
              },
              {
                "id": 3,
                "text": "I evaluate solutions for the business.",
                "score": 0
              }
            ]
          }
        ]
      }
   */
  ]
});
