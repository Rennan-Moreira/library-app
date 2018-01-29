import Controller from '@ember/controller';
import { computed, observer } from '@ember/object';
import { match, not } from '@ember/object/computed';
export default Controller.extend({

  emailAddress: '',
  responseMessage: '',
  //isDisabled: empty('emailAddress'),
  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {
    saveInvitation() {
      alert(`O e-mail está sendo processado: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Obrigado! Salvamos seu e-mail conosco: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  },
  actualEmailAddress: computed('emailAddress', function() {
    //console.log('actualEmailAddress é uma função chamada: ', this.get('emailAddress'));
  }),

  emailAddressChanged: observer('emailAddress', function() {
    //console.log('observer é chamado: ', this.get('emailAddress'));
  })

});