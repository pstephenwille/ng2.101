import { bootstrap }    from '@angular/platform-browser-dynamic';
// import { provideForms, disableDeprecatedForms} from '@angular/forms';
import { FormComponent } from './form/form.component';
import { OfferComponent } from './offer/offer.component';

bootstrap(FormComponent, [
  // disableDeprecatedForms(),
  // provideForms()
]);


bootstrap(FormComponent);
// window['app'] = bootstrap(OfferComponent);

