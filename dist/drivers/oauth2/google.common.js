/*!
 * @websanova/vue-auth v3.3.6
 * https://websanova.com/docs/vue-auth
 * Released under the MIT License.
 */

'use strict';

var google = {
  url: 'https://accounts.google.com/o/oauth2/auth',
  params: {
    client_id: '',
    redirect_uri: 'login/google',
    response_type: 'code',
    scope: 'email',
    state: {}
  }
};

module.exports = google;
