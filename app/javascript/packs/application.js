require("semantic-ui-sass")
//= require jquery
require("jquery-ui")
//= require_tree .
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import './layouts/message'


Rails.start()
Turbolinks.start()
ActiveStorage.start()
