
export const resourceNormalizationRules = [


  [/bitsofco\.de/i, 'bitsofcode'],
  [/web tools weekly/i, 'web_tools_weekly'],
  [/web design weekly/i, 'web_design_weekly'],
  [/vue revue/i, 'vue_revue'],
  [/ember ?weekly/i, 'ember_weekly'],
  [/elm ?weekly/i, 'elm_weekly'],
  [/rascia/i, 'tania_rascia'],
  [/react ?status/i, 'react_status'],
  [/angular ?in ?depth/i, 'angular_in_depth'],

  //  podcasts


  [/react ?podcast/i, 'react_podcast'],
  [/putaindecode/i, 'putaindecode'],
  [/if\/else/i, 'if_else_podcast'],
  [/devmode/i, 'devmode'],
  [/dev ?schacht/i, 'dev_schacht'],
  [/corecursive/i, 'corecursive'],
  [/coding ?blocks/i, 'coding_blocks'],
  [/working ?draft/i, 'working_draft'],
  [/webbidevaus/i, 'webbidevaus'],
  [/views ?on ?vue/i, 'views_on_vue'],
  [/bikeshed/i, 'bikeshed'],
  [/react ?podcast/i, 'react_podcast'],
  [/talkscript/i, 'talkscript'],
  [/soft ?skills ?engineering/i, 'soft_skills_engineering'],
  [/reason ?town/i, 'reason_town'],
  [/real ?talk/i, 'real_talk_javascript'],
  [/react ?native ?radio/i, 'react_native_radio'],
  [/hipsters/i, 'hipsters_tech'],
  [/functional ?geekery/i, 'functional_geekery'],
  [/frontend ?weekend/i, 'frontend_weekend'],
  [/embermap/i, 'embermap'],
  [/base ?cs/i, 'base_cs'],
  [/angular ?air/i, 'angular_air'],
  [/adventures ?in ?angular/i, 'adventures_in_angular'],
  [/net ?rocks/i, 'dot_net_rocks'],
  [/a11y ?rules/, 'a11y_rules'],
  [/bike ?shed/, 'the_bike_shed'],

  [/schwarzmuller/i, 'schwarzmuller'],
  [/schwarzmüller/i, 'schwarzmuller'],
  [/shwarzmüller/i, 'schwarzmuller'],

  [/youtube/i, 'youtube'],
  [/vue ?school/i, 'vueschool'],
  [/laracasts/i, 'laracasts'],
  [/vue ?mastery/i, 'vuemastery'],
  [/ultimate ?course/i, 'ultimate_courses'],
  [/udemy/i, 'udemy'],
  [/platzi/i, 'platzi'],
  [/udacity/i, 'udacity'],
  [/treehouse/i, 'treehouse'],
  [/testingjavascript/i, 'testingjavascript'],
  [/scrimba/i, 'scrimba'],
  [/packtpub/i, 'packtpub'],
  [/javascript\.info/i, 'javascript_info'],
  [/front ?end ?masters/i, 'frontendmasters'],
  [/exercism/i, 'exercism'],
  [/devdocs/i, 'devdocs'],
  [/codewars/i, 'codewars'],
  [/caniuse/i, 'caniuse'],
  [/lynda/i, 'lynda'],
  [/traversy/i, 'traversy'],
  [/odin/i, 'odin_project'],
  [/open ?class ?room/i, 'openclassroom'],
  [/linkedin ?learning/i, 'linkedin_learning'],
  [/fireship/i, 'fireship'],
  [/academind/i, 'academind'],


  [/enjoy ?the ?vue/i, 'enjoy_the_vue'],

]




/**
 * Defines a set of rules which can be applied
 * in order to standardize tool names, it's mostly involved
 * to extract things from the "other tools" questions.
 *
 * ⚠️ ORDER MATTERS
 */
export const toolNormalizationRules = [
  [/(Good Old Plain JavaScript|"Plain" JavaScript \(ES5\)|vanilla)/i, 'vanillajs'],
  [/es6/i, 'es6'],
  [/coffescript/i, 'coffeescript'],
  [/coffeescript/i, 'coffeescript'],
  [/typescript/i, 'typescript'],
  [/flow/i, 'flow'],
  [/elm-test/i, 'elm_test'],
  [/elm( |-)?native/i, 'elm_native'],
  [/elm/i, 'elm'],
  [/reason/i, 'reason'],
  [/clojure/i, 'clojurescript'],
  [/No Front-End Framework/i, 'nofrontendframework'],
  [/preact/i, 'preact'],
  [/^react$/i, 'react'],
  [/aurelia/i, 'aurelia'],
  [/polymer/i, 'polymer'],
  [/^angular$/i, 'angular'],
  [/angular ?2/i, 'angular'],
  [/angular ?1/i, 'angular_1'],
  [/angular( |-)?native/i, 'angular_native'],
  [/ember/i, 'ember'],
  [/ember( |-|\.)?data/i, 'ember_data'],
  [/^vue(\.js)?$/i, 'vuejs'],
  [/backbone/i, 'backbone'],
  [/redux/i, 'redux'],
  [/mobx/i, 'mobx'],
  [/rest( |-)?api/i, 'rest'],
  [/restify/i, 'restify'],
  [/firebase/i, 'firebase'],
  [/graphql/i, 'graphql'],
  [/apollo/i, 'apollo'],
  [/falcor/i, 'falcor'],
  [/horizon/i, 'horizon'],
  [/(meteor|blaze)/i, 'meteor'],
  [/feathers/i, 'feathers'],
  [/donejs/i, 'donejs'],
  [/mern/i, 'mern'],
  [/mean/i, 'mean'],
  [/mocha/i, 'mocha'],
  [/jasmine/i, 'jasmine'],
  [/enzyme/i, 'enzyme'],
  [/jest/i, 'jest'],
  [/cucumber/i, 'cucumberjs'],
  [/^ava$/i, 'ava'],
  [/^java$/i, 'java'],
  [/tape/i, 'tape'],
  [/karma/i, 'karma'],
  [/plain( |-|\.)css/i, 'plaincss'],
  [/css( |-|_|\.)?modules/i, 'cssmodules'],
  [/css( |-|_|\.)?next/i, 'cssnext'],
  [/pure( |-|_|\.)?css/i, 'purecss'],
  [/post( |-|_|\.)?css/i, 'postcss'],
  [/css( |-|_)?in( |-|_)?js/i, 'css_in_js'],
  [/s(a|c)ss/i, 'sass'],
  [/^less$/i, 'less'],
  [/stylus/i, 'stylus'],
  [/aphrodite/i, 'aphrodite'],
  [/webpack/i, 'webpack'],
  [/grunt/i, 'grunt'],
  [/gulp/i, 'gulp'],
  [/browserify/i, 'browserify'],
  [/bower/i, 'bower'],
  [/native( |-|_)?apps/i, 'nativeapps'],
  [/react( |-|_)?native/i, 'reactnative'],
  [/phonegap\/cordova/i, 'cordova'],
  [/cordova/i, 'cordova'],
  [/phonegap/i, 'phonegap'],
  [/native( |-|_)?script/i, 'nativescript'],
  [/express/i, 'express'],
  [/koa/i, 'koa'],
  [/hapi/i, 'hapi'],
  [/relay/i, 'relay'],
  [/sails/i, 'sails'],
  [/loopback/i, 'loopback'],
  [/keystone/i, 'keystone'],
  [/electron/i, 'electron'],
  [/ionic/i, 'ionic'],
  [/bootstrap/i, 'bootstrap'],
  [/foundation/i, 'foundation'],
  [/npm/i, 'npm'],
  [/rollup/i, 'rollup'],
  [/next(\.| |-|_)?js/i, 'nextjs'],
  [/storybook/i, 'storybook'],
  [/cycle( |-|_|\.)js/i, 'cyclejs'],
  [/knockout/i, 'knockout'],
  [/jquery/i, 'jquery'],
  [/mithril/i, 'mithril'],
  [/inferno/i, 'inferno'],
  [/riot/i, 'riotjs'],
  [/^ext\.?(js)?$/i, 'extjs'],
  [/svelte/i, 'svelte'],
  [/^om$/i, 'om'],
  [/choo/i, 'choo'],
  [/hyperapp/i, 'hyperapp'],
  [/dojo/i, 'dojo'],
  [/alkali/i, 'alkali'],
  [/marionette/i, 'marionette'],
  [/kendo/i, 'kendo'],
  [/marko/i, 'marko'],
  [/reagent/i, 'reagent'],
  [/haxe/i, 'haxe'],
  [/ampersand/i, 'ampersand'],
  [/rxjs/i, 'rxjs'],
  [/canjs/i, 'canjs'],
  [/prototype/i, 'prototype'],
  [/mootools/i, 'mootools'],
  [/glimmer/i, 'glimmerjs'],
  [/durandal/i, 'durandal'],
  [/moon/i, 'moon'],
  [/batman/i, 'batman'],
  [/flight/i, 'flight'],
  [/scala/i, 'scala'],
  [/webix/i, 'webix'],
  [/enyo/i, 'enyo'],
  [/quasar/i, 'quasar'],
  [/d3/i, 'd3'],
  [/three/i, 'threejs'],
  [/cerebral/i, 'cerebral'],
  [/underscore/i, 'underscore'],
  [/vuex/i, 'vuex'],
  [/flux/i, 'flux'],
  [/pouch/i, 'pouchdb'],
  [/ngrx/i, 'ngrx'],
  [/graph\.?cool/i, 'graphcool'],
  [/parse/i, 'parse'],
  [/realm/i, 'realm'],
  [/gun/i, 'gunjs'],
  [/couchbase/i, 'couchbase'],
  [/datomic/i, 'datomic'],
  [/deployd/i, 'deployd'],
  [/hood\.?ie/i, 'hoodie'],
  [/kinvey/i, 'kinvey'],
  [/kinto/i, 'kinto'],
  [/mongo/i, 'mongodb'],
  [/contentful/i, 'contentful'],
  [/mysql/i, 'mysql'],
  [/redis/i, 'redis'],
  [/rethink/i, 'rethinkdb'],
  [/^node$|node\.?js|node js/i, 'nodejs'],
  [/asp\. ?net|\.net|dotnet/i, 'dotnet'],
  [/c#/i, 'csharp'],
  [/django/i, 'django'],
  [/ror|rails|ruby on rails/i, 'rails'],
  [/phpstorm/i, 'phpstorm'],
  [/(^|\s)php($|\s)/i, 'php'],
  [/adonis/i, 'adonis'],
  [/python/i, 'python'],
  [/^go$|golang/i, 'golang'],
  [/laravel/i, 'laravel'],
  [/elixir/i, 'elixir'],
  [/couchdb/i, 'couchdb'],
  [/trails/i, 'trails'],
  [/kraken/i, 'kraken'],
  [/serverless/i, 'serverless'],
  [/socket\.?io/i, 'socketio'],
  [/micro/i, 'micro'],
  [/haskell/i, 'haskell'],
  [/qunit/i, 'qunit'],
  [/chai/i, 'chai'],
  [/protractor/i, 'protractor'],
  [/selenium/i, 'selenium'],
  [/nightwatch/i, 'nightwatch'],
  [/^tap$/i, 'node_tap'],
  [/sinon/i, 'sinonjs'],
  [/^intern$/i, 'intern'],
  [/^lab$/i, 'lab'],
  [/testcafe/i, 'testcafe'],
  [/junit/i, 'junit'],
  [/cypress/i, 'cypress'],
  [/phantom/i, 'phantomjs'],
  [/^atomic/i, 'atomic_design'],
  [/bem/i, 'bem'],
  [/bulma/i, 'bulma'],
  [/semantic/i, 'semanticui'],
  [/tach\.+on/i, 'tachyons'],
  [/material design/i, 'material_design'],
  [/skeleton/i, 'skeleton'],
  [/material(\.| |-|_)?ui/i, 'material_ui'],
  [/style(d)?(\.| |-|_)?co(m|n)ponent(s)?/i, 'styled_components'],
  [/bourbon/i, 'bourbon'],
  [/mill?igram/i, 'milligram'],
  [/uikit/i, 'uikit'],
  [/flexbox/i, 'flexbox'],
  [/topocoat/i, 'topocoat'],
  [/glamor/i, 'glamor'],
  [/radium/i, 'radium'],
  [/styletron/i, 'styletron'],
  [/jss/i, 'jss'],
  [/mdl/i, 'mdl'],
  [/vuetify/i, 'vuetify'],
  [/materiali(z|s)e/i, 'materialize'],
  [/brunch/i, 'brunch'],
  [/make/i, 'make'],
  [/broccoli|brocolli/i, 'broccoli'],
  [/fusebox/i, 'fusebox'],
  [/systemjs/i, 'systemjs'],
  [/gradle/i, 'gradle'],
  [/stealjs/i, 'stealjs'],
  [/babel/i, 'babel'],
  [/weex/i, 'weex'],
  [/xamarin/i, 'xamarin'],
  [/pwa/i, 'pwa'],
  [/progressive( |-|_)?web( |-|_)?app/i, 'pwa'],
  [/^nw(js)$/i, 'nwjs'],
  [/expo/i, 'expo'],
  [/flutter/i, 'flutter'],
  [/(appcelerator|titanium)/i, 'appcelerator'],
  [/fuse/i, 'fuse'],
  [/^cef$/i, 'cef'],
  [/chromium embedded framework/i, 'cef'],
  [/swift/i, 'swift'],
  [/yarn/i, 'yarn'],
  [/nuget/i, 'nuget'],
  [/composer/i, 'composer'],
  [/jspm/i, 'jspm'],
  [/pnpm/i, 'pnpm'],
  [/homebrew|brew/i, 'homebrew'],
  [/leiningen/i, 'leiningen'],
  [/maven/i, 'maven'],
  [/immutable/i, 'immutable'],
  [/lodash/i, 'lodash'],
  [/moment/i, 'moment'],
  [/ramda/i, 'ramda'],
  [/axios/i, 'axios'],
  [/recompose/i, 'recompose'],
  [/zepto/i, 'zepto'],
  [/async/i, 'async'],
  [/atom/i, 'atom'],
  [/webstorm/i, 'webstorm'],
  [/intellij/i, 'intellij'],
  [/sublime/i, 'sublime-text'],
  [/vim/i, 'vim'],
  [/emacs/i, 'emacs'],
  [/brackets/i, 'brackets'],
  [/(visual studio|vs code|vscode|visualstudio)/i, 'visual_studio'],
  [/notepad/i, 'notepad++'],
  [/netbeans/i, 'netbeans'],
  [/coda/i, 'coda'],
  [/prettier/i, 'prettier'],
  [/eslint/i, 'eslint'],
  [/tslint/i, 'tslint'],
  [/stylelint/i, 'stylelint'],
  [/jshint/i, 'jshint'],
  [/standardjs/i, 'standardjs'],
  [/jscs/i, 'jscs'],
  [/jslint/i, 'jslint'],
  [/^xo$/i, 'xo'],
  [/date ?fns/i, 'date_fns'],
  [/date(-|_)?fns/i, 'date_fns'],
  [/objective(-|_)?c/i, 'objective_c'],
  [/objective ?c/i, 'objective_c'],
  [/parcel/i, 'parcel'],
  [/rust/i, 'rust'],
  [/service(-|_)?workers/i, 'service_workers'],
  [/ocaml/i, 'ocaml'],
  [/nano/i, 'nano'],
  [/kotlin/i, 'kotlin'],
  [/^r$/i, 'r'],
  [/pycharm/i, 'pycharm'],
  [/erlang/i, 'erlang'],
  [/bash/i, 'bash'],
  [/delphi/i, 'delphi'],
  [/perl/i, 'perl'],
  [/lisp/i, 'lisp'],
  [/purescript/i, 'purescript'],
  [/websockets/i, 'websockets'],
  [/luxon/i, 'luxon'],
  [/fbelt/i, 'fbelt'],
  [/bbedit/i, 'bbedit'],
  [/dart/i, 'dart'],
  [/lua/i, 'lua'],


  [/ruby/i, 'ruby'],
  [/LitElement/i, 'litelement'],



  [/nest/i, 'nest'],
  [/hapi/i, 'hapi'],
  [/gridsome/i, 'gridsome'],
  [/sapper/i, 'sapper'],
  [/vulcan/i, 'vulcan'],
  [/prisma/i, 'prisma'],
  [/flask/i, 'flask'],
  [/inertia/i, 'inertia'],
  [/egg/i, 'egg'],
  [/strapi/i, 'strapi'],
  [/socket\.io/i, 'socketio'],
  [/socketio/i, 'socketio'],
  [/fastify/i, 'fastify'],
  [/restify/i, 'restify'],
  [/symfony/i, 'symfony'],


  [/stimulus/i, 'stimulus'],
  [/stencil/i, 'stencil'],
  [/re\-frame/i, 'reframe'],
  [/reframe/i, 'reframe'],
  [/lit-html/i, 'litelement'],
  [/lit-element/i, 'litelement'],
  [/hyperhtml/i, 'hyperhtml'],
  [/cycle/i, 'cycle'],
  [/sencha/i, 'sencha'],
  [/ractive/i, 'ractive'],
  [/nuxt/i, 'nuxt'],
  [/gatsby/i, 'gatsby'],
  [/blazor/i, 'blazor'],
  [/angularjs/i, 'angularjs'],

  [/xstate/i, 'xstate'],
  [/urql/i, 'urql'],
  [/unistore/i, 'unistore'],
  [/unistroe/i, 'unistore'],
  [/storeon/i, 'storeon'],
  [/stator/i, 'stator'],
  [/orbit/i, 'orbit'],
  [/immer/i, 'immer'],
  [/hasura/i, 'hasura'],
  [/easy\-peasy/i, 'easypeasy'],
  [/easypeasy/i, 'easypeasy'],
  [/unstated/i, 'unstated'],
  [/swr/i, 'swr'],
  [/rematch/i, 'rematch'],
  [/context/i, 'react_context'],
  [/hooks/i, 'react_hooks'],
  [/overmind/i, 'overmind'],
  [/ngxs/i, 'ngxs'],
  [/effector/i, 'effector'],
  [/akita/i, 'akita'],

  [/webdriver/i, 'webdriver'],
  [/wallaby/i, 'wallaby'],
  [/vue\-test\-utils/i, 'vue_test_utils'],
  [/testing\-library/i, 'react_testing_library'],
  [/testing ?library/i, 'react_testing_library'],
  [/styleguidist/i, 'styleguidist'],
  [/stryker/i, 'stryker'],
  [/spectator/i, 'spectator'],
  [/stryker/i, 'stryker'],
  [/percy/i, 'percy'],
  [/detox/i, 'detox'],
  [/codecept/i, 'codecept'],

  [/capacitor/i, 'capacitor'],
  [/vue native/i, 'vue_native'],
  [/revery/i, 'revery'],
  [/nodegui/i, 'nodegui'],
  [/node gui/i, 'nodegui'],
  [/framework7/i, 'framework7'],

  [/vivaldi/i, 'vivaldi'],
  [/qute/i, 'qutebrowser'],
  [/opera/i, 'opera'],
  [/brave/i, 'brave'],
  [/sizzy/i, 'sizzy'],
  [/internet explorer 11/i, 'internet-explorer-11'],
  [/ie11/i, 'internet-explorer-11'],
  [/ie 11/i, 'internet-explorer-11'],
  [/firefox developer edition/i, 'firefox_developer_edition'],
  [/edge chromium/i, 'edge'],
  [/edge \(chromium\)/i, 'edge'],
  [/chromium/i, 'chromium'],
  [/edge/i, 'edge'],
  [/chrome/i, 'chrome'],
  [/safari/i, 'safari'],
  [/firefox/i, 'firefox'],

  [/tsc/i, 'tsc'],
  [/shadow/i, 'shadow_cljs'],
  [/pika/i, 'pika'],
  [/lerna/i, 'lerna'],
  [/create-react-app/i, 'create_react_app'],
  [/cra/i, 'create_react_app'],
  [/angular-cli/i, 'angular_cli'],
  [/angular cli/i, 'angular_cli'],
  [/vue-cli/i, 'vue_cli'],
  [/vue cli/i, 'vue_cli'],
  [/metro/i, 'metro'],
  [/bazel/i, 'bazel'],
  [/codekit/i, 'codekit'],


  [/voca/i, 'voca'],
  [/uuid/i, 'uuid'],
  [/spacetime/i, 'spacetime'],
  [/reselect/i, 'reselect'],
  [/numeral/i, 'numeral'],
  [/math/i, 'mathjs'],
  [/joda/i, 'js_joda'],
  [/i18next/i, 'i18next'],
  [/gsap/i, 'gsap'],
  [/fp-ts/i, 'fp_ts'],
  [/formik/i, 'formik'],
  [/dotenv/i, 'dotenv'],
  [/day\.js/i, 'dayjs'],
  [/dayjs/i, 'dayjs'],
  [/classnames/i, 'classnames'],
  [/bluebird/i, 'bluebird'],
  [/sanctuary/i, 'sanctuary'],
  [/rambda/i, 'ramda'],
  [/nodemon/i, 'nodemon'],
  [/greensock/i, 'gsap'],
  [/emotion/i, 'emotion'],

  [/sql/i, 'sql'],
  [/shell/i, 'shell'],
  [/solidity/i, 'solidity'],
  [/matlab/i, 'matlab'],
  [/html/i, 'html'],
  [/css/i, 'css'],
  [/groovy/i, 'groovy'],
  [/f\#/i, 'fsharp'],
  [/crystal/i, 'crystal'],
  [/coldfusion/i, 'coldfusion'],
  [/cfml/i, 'coldfusion'],
  [/apex/i, 'apex'],





]

export default [...sourceNormalizationRules, ...toolNormalizationRules, ...otherFeaturesNormalizationRules];
