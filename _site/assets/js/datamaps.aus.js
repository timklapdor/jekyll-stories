





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-UFMpXZiU8/kG0aZl62l3OFZi0gwlVRLYrsamBbXttDRSbDmQk1ZyKj5R11ghzrHB/NaIPBuLauI34mVpsuxx5w==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-94eca081886beb7440fa7236f4fd103f.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-FIEp4ofjNZOwIuaCNdkF6w53h1fjud2bVTkAOnOQOL3+uw98WLUVoh+QIC6gJ/fWDkIeNNwkc/+gyn8NUJiWZw==" rel="stylesheet" href="https://github.githubassets.com/assets/site-2a37b0558327c9981d25e3ed83ae9eec.css" />
    <link crossorigin="anonymous" media="all" integrity="sha512-yS5eh1H0kSOEUieCKzg0iLUUKLDAwgtC1boMfRHqfJqrKS5mm5jaSKpnZ/gsAT/d87KzklUhl5ABkfGeylwQ9A==" rel="stylesheet" href="https://github.githubassets.com/assets/github-899a363147e065279801f82e13bdeb87.css" />
    
    
    
    

  <meta name="viewport" content="width=device-width">
  
  <title>datamaps/datamaps.aus.js at master · markmarkoh/datamaps · GitHub</title>
    <meta name="description" content="Customizable SVG map visualizations for the web in a single Javascript file using D3.js - markmarkoh/datamaps">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars3.githubusercontent.com/u/11268?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="markmarkoh/datamaps" /><meta property="og:url" content="https://github.com/markmarkoh/datamaps" /><meta property="og:description" content="Customizable SVG map visualizations for the web in a single Javascript file using D3.js - markmarkoh/datamaps" />

  <link rel="assets" href="https://github.githubassets.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="C730:1B4B:1023B6F:18A5ED8:5C78BC14" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="C730:1B4B:1023B6F:18A5ED8:5C78BC14" /><meta name="octolytics-dimension-region_edge" content="sea" /><meta name="octolytics-dimension-region_render" content="iad" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">


<meta class="js-ga-set" name="dimension1" content="Logged Out">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="ZjFiYzU3YTFmYjQwYmI1ZmExOGNiMzM5M2M2NWZhZTA1ZGY0YzQ0MjhjYjBlODI4MDBkMmU2ZGUzNmRlZTI5YXx7InJlbW90ZV9hZGRyZXNzIjoiMTAzLjU1LjkzLjIyNCIsInJlcXVlc3RfaWQiOiJDNzMwOjFCNEI6MTAyM0I2RjoxOEE1RUQ4OjVDNzhCQzE0IiwidGltZXN0YW1wIjoxNTUxNDE2MzUyLCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="UNIVERSE_BANNER,MARKETPLACE_SOCIAL_PROOF,MARKETPLACE_PLAN_RESTRICTION_EDITOR,MARKETPLACE_BROWSING_V2">

  <meta name="html-safe-nonce" content="b549752a7c9984e61198219d650ab42a68170252">

  <meta http-equiv="x-pjax-version" content="06b62edbb0ed91ad153b610612b94ad3">
  

      <link href="https://github.com/markmarkoh/datamaps/commits/master.atom" rel="alternate" title="Recent Commits to datamaps:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/markmarkoh/datamaps git https://github.com/markmarkoh/datamaps.git">

  <meta name="octolytics-dimension-user_id" content="11268" /><meta name="octolytics-dimension-user_login" content="markmarkoh" /><meta name="octolytics-dimension-repository_id" content="6631214" /><meta name="octolytics-dimension-repository_nwo" content="markmarkoh/datamaps" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="6631214" /><meta name="octolytics-dimension-repository_network_root_nwo" content="markmarkoh/datamaps" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/markmarkoh/datamaps/blob/master/dist/datamaps.aus.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">


  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-out env-production emoji-size-boost page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    


        
<header class="Header header-logged-out  position-relative f4 py-3" role="banner">
  <div class="container-lg d-flex px-3">
    <div class="d-flex flex-justify-between flex-items-center">
        <a class="mr-4" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
          <svg height="32" class="octicon octicon-mark-github text-white" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
        </a>
    </div>

    <div class="HeaderMenu HeaderMenu--logged-out d-flex flex-justify-between flex-items-center flex-auto">
      <div class="d-none">
        <button class="btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <svg height="24" class="octicon octicon-x text-gray" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        </button>
      </div>

        <nav class="mt-0" aria-label="Global">
          <ul class="d-flex list-style-none">
              <li class=" mr-3 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap  d-inline-block">
                    Why GitHub?
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-relative">
                      <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>
                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 mt-0  p-4 left-n4 position-absolute">
                    <a href="/features" class="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Features">Features <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a>
                    <ul class="list-style-none f5 pb-3">
                      <li class="edge-item-fix"><a href="/features/code-review/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Code review">Code review</a></li>
                      <li class="edge-item-fix"><a href="/features/project-management/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Project management">Project management</a></li>
                      <li class="edge-item-fix"><a href="/features/integrations" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Integrations">Integrations</a></li>
                      <li class="edge-item-fix"><a href="/features/actions" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Actions">Actions</a>
                      <li class="edge-item-fix"><a href="/features#team-management" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Team management">Team management</a></li>
                      <li class="edge-item-fix"><a href="/features#social-coding" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Social coding">Social coding</a></li>
                      <li class="edge-item-fix"><a href="/features#documentation" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Documentation">Documentation</a></li>
                      <li class="edge-item-fix"><a href="/features#code-hosting" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Code hosting">Code hosting</a></li>
                    </ul>

                    <ul class="list-style-none mb-0 border-lg-top pt-lg-3">
                      <li class="edge-item-fix"><a href="/case-studies" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Case studies">Case Studies <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                      <li class="edge-item-fix"><a href="/security" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Security">Security <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
              <li class=" mr-3 mr-lg-3">
                <a href="/enterprise" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, click, go to Enterprise">Enterprise</a>
              </li>

              <li class=" mr-3 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap  d-inline-block">
                    Explore
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-relative">
                      <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>

                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-0 mt-0  p-4 left-n4 position-absolute">
                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/explore" class="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Features">Explore GitHub <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>

                    <h4 class="text-gray-light text-normal text-mono f5 mb-2  border-top pt-3">Learn &amp; contribute</h4>
                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/topics" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Topics">Topics</a></li>
                      <li class="edge-item-fix"><a href="/collections" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Collections">Collections</a></li>
                      <li class="edge-item-fix"><a href="/trending" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Trending">Trending</a></li>
                      <li class="edge-item-fix"><a href="https://lab.github.com/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Learning lab">Learning Lab</a></li>
                      <li class="edge-item-fix"><a href="https://opensource.guide" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Open source guides">Open source guides</a></li>
                    </ul>

                    <h4 class="text-gray-light text-normal text-mono f5 mb-2  border-top pt-3">Connect with others</h4>
                    <ul class="list-style-none mb-0">
                      <li class="edge-item-fix"><a href="/events" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Events">Events</a></li>
                      <li class="edge-item-fix"><a href="https://github.community" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Community forum">Community forum</a></li>
                      <li class="edge-item-fix"><a href="https://education.github.com" class="py-2 pb-0 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to GitHub Education">GitHub Education</a></li>
                    </ul>
                  </div>
                </details>
              </li>

              <li class=" mr-3 mr-lg-3">
                <a href="/marketplace" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Marketplace">Marketplace</a>
              </li>

              <li class=" mr-3 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap  d-inline-block">
                    Pricing
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-relative">
                       <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>

                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-4 mt-0  p-4 left-n4 position-absolute">
                    <a href="/pricing" class="pb-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Pricing">Plans <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a>

                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/pricing#feature-comparison" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Compare features">Compare plans</a></li>
                      <li class="edge-item-fix"><a href="https://enterprise.github.com/contact" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Compare features">Contact Sales</a></li>
                    </ul>

                    <ul class="list-style-none mb-0  border-top pt-3">
                      <li class="edge-item-fix"><a href="/nonprofit" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Nonprofits">Nonprofit <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                      <li class="edge-item-fix"><a href="https://education.github.com" class="py-2 pb-0 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover"  data-ga-click="(Logged out) Header, go to Education">Education <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
          </ul>
        </nav>

      <div class="d-flex flex-items-center px-0 text-center text-left">
          <div class="d-lg-flex mr-3">
            <div class="header-search scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="6631214" data-scoped-search-url="/markmarkoh/datamaps/search" data-unscoped-search-url="/search" action="/markmarkoh/datamaps/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control header-search-wrapper header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search"
          data-unscoped-placeholder="Search GitHub"
          data-scoped-placeholder="Search"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=1c8iwpaeYHfPibFMPOB9Ymadpbi1VKdeRys8eMGT7d501/kOp8pnJ3oCLsptxrpO1HYBY8yQtXsZDtNzeOfrgw=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


</ul>

            </div>
      </label>
</form>  </div>
</div>

          </div>

        <a class="HeaderMenu-link no-underline mr-3" href="/login?return_to=%2Fmarkmarkoh%2Fdatamaps%2Fblob%2Fmaster%2Fdist%2Fdatamaps.aus.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign&nbsp;in</a>
          <a class="HeaderMenu-link d-inline-block no-underline border border-gray-dark rounded-1 px-2 py-1" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign&nbsp;up</a>
      </div>
    </div>
  </div>
</header>

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">

</div>



  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main id="js-repo-pjax-container" data-pjax-container >
      


  





  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">


  <li>
      <a href="/login?return_to=%2Fmarkmarkoh%2Fdatamaps"
    class="btn btn-sm btn-with-count tooltipped tooltipped-s"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/markmarkoh/datamaps/watchers"
     aria-label="139 users are watching this repository">
    139
  </a>

  </li>

  <li>
        <a href="/login?return_to=%2Fmarkmarkoh%2Fdatamaps"
      class="btn btn-sm btn-with-count tooltipped tooltipped-s"
      aria-label="You must be signed in to star a repository" rel="nofollow">
      <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
      Star
    </a>

    <a class="social-count js-social-count" href="/markmarkoh/datamaps/stargazers"
      aria-label="3087 users starred this repository">
      3,087
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fmarkmarkoh%2Fdatamaps"
        class="btn btn-sm btn-with-count tooltipped tooltipped-s"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/markmarkoh/datamaps/network/members" class="social-count"
       aria-label="835 users forked this repository">
      835
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=11268" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/markmarkoh">markmarkoh</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/markmarkoh/datamaps">datamaps</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /markmarkoh/datamaps" href="/markmarkoh/datamaps">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /markmarkoh/datamaps/issues" href="/markmarkoh/datamaps/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">147</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /markmarkoh/datamaps/pulls" href="/markmarkoh/datamaps/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">32</span>
      <meta itemprop="position" content="3">
</a>  </span>


    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /markmarkoh/datamaps/projects" href="/markmarkoh/datamaps/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >1</span>
</a>


    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse alerts security people /markmarkoh/datamaps/pulse" href="/markmarkoh/datamaps/pulse">
      <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
      Insights
</a>

</nav>


  </div>
<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
    



  
    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/markmarkoh/datamaps/blob/e11c513a23e1a7b836fee0605d478dc9ca176151/dist/datamaps.aus.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:393ad6449dd57f29e2f715b7cd0fb758 -->

        <div class="signup-prompt-bg rounded-1">
      <div class="signup-prompt p-4 text-center mb-4 rounded-1">
        <div class="position-relative">
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/site/dismiss_signup_prompt" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="URoLS2o7B85z8HfeMza4+D8EIDSpE9gYYuzKRSQBJGRy4KVjTT/k0XQ/tDC8pLTCffgYo+rTxDsATs0nQBKjXw==" />
            <button type="submit" class="position-absolute top-0 right-0 btn-link link-gray" data-ga-click="(Logged out) Sign up prompt, clicked Dismiss, text:dismiss">
              Dismiss
            </button>
</form>          <h3 class="pt-2">Join GitHub today</h3>
          <p class="col-6 mx-auto">GitHub is home to over 31 million developers working together to host and review code, manage projects, and build software together.</p>
          <a class="btn btn-primary" href="/join?source=prompt-blob-show" data-ga-click="(Logged out) Sign up prompt, clicked Sign up, text:sign-up">Sign up</a>
        </div>
      </div>
    </div>


    <div class="file-navigation">
      
<details class="details-reset details-overlay select-menu branch-select-menu float-left">
  <summary class="btn btn-sm select-menu-button css-truncate"
           data-hotkey="w"
           
           title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target">master</span>
  </summary>

  <details-menu class="select-menu-modal position-absolute" style="z-index: 99;" src="/markmarkoh/datamaps/ref-list/master/dist/datamaps.aus.js?source_action=show&amp;source_controller=blob" preload>
    <include-fragment class="select-menu-loading-overlay anim-pulse">
      <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
    </include-fragment>
  </details-menu>
</details>

      <div class="BtnGroup float-right">
        <a href="/markmarkoh/datamaps/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy for="blob-path" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
      <div id="blob-path" class="breadcrumb">
        <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="/markmarkoh/datamaps"><span>datamaps</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/markmarkoh/datamaps/tree/master/dist"><span>dist</span></a></span><span class="separator">/</span><strong class="final-path">datamaps.aus.js</strong>
      </div>
    </div>


    <include-fragment src="/markmarkoh/datamaps/contributors/master/dist/datamaps.aus.js" class="commit-tease commit-loader">
      <div>
        Fetching contributors&hellip;
      </div>

      <div class="commit-tease-contributors">
          <img alt="" class="loader-loading float-left" src="https://github.githubassets.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" height="16" />
        <span class="loader-error">Cannot retrieve contributors at this time</span>
      </div>
</include-fragment>




    <div class="file ">
      
<div class="file-header ">
  
  <div class="file-info float-left ">
      1069 lines (966 sloc)
      <span class="file-info-divider"></span>
    153 KB
  </div>

  <div class="file-actions d-flex ">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/markmarkoh/datamaps/raw/master/dist/datamaps.aus.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/markmarkoh/datamaps/blame/master/dist/datamaps.aus.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/markmarkoh/datamaps/commits/master/dist/datamaps.aus.js">History</a>
    </div>


    <div>
            <a class="btn-octicon tooltipped tooltipped-nw"
               href="https://desktop.github.com"
               aria-label="Open this file in GitHub Desktop"
               data-ga-click="Repository, open with desktop, type:mac">
                <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
            </a>

          <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
            aria-label="You must be signed in to make or propose changes">
            <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
          <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
            aria-label="You must be signed in to make or propose changes">
            <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
    </div>
  </div>
</div>

      

  <div itemprop="text" class="blob-wrapper data type-javascript ">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> svg;</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span>save off default references</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> d3 <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-smi">d3</span>, topojson <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-smi">topojson</span>;</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> defaultOptions <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">    scope<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>world<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">    responsive<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">    aspectRatio<span class="pl-k">:</span> <span class="pl-c1">0.5625</span>,</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">    setProjection<span class="pl-k">:</span> setProjection,</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">    projection<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>equirectangular<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">    dataType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>json<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">    data<span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">done</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {},</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">    fills<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">      defaultFill<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#ABDDA4<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">    filters<span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">    geographyConfig<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">        dataUrl<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">        hideAntarctica<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">        hideHawaiiAndAlaska <span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">        borderWidth<span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">        borderColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#FDFDFD<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">popupTemplate</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">geography</span>, <span class="pl-smi">data</span>) {</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;hoverinfo&quot;&gt;&lt;strong&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">geography</span>.<span class="pl-smi">properties</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/strong&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">        popupOnHover<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">        highlightOnHover<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">        highlightFillColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#FC8D59<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">        highlightBorderColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>rgba(250, 15, 160, 0.2)<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">        highlightBorderWidth<span class="pl-k">:</span> <span class="pl-c1">2</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">    projectionConfig<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">      rotation<span class="pl-k">:</span> [<span class="pl-c1">97</span>, <span class="pl-c1">0</span>]</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">    bubblesConfig<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">        borderWidth<span class="pl-k">:</span> <span class="pl-c1">2</span>,</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">        borderColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#FFFFFF<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">        popupOnHover<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">        radius<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">popupTemplate</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">geography</span>, <span class="pl-smi">data</span>) {</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;hoverinfo&quot;&gt;&lt;strong&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">data</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/strong&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">        fillOpacity<span class="pl-k">:</span> <span class="pl-c1">0.75</span>,</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">        animate<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">        highlightOnHover<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">        highlightFillColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#FC8D59<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">        highlightBorderColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>rgba(250, 15, 160, 0.2)<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">        highlightBorderWidth<span class="pl-k">:</span> <span class="pl-c1">2</span>,</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">        highlightFillOpacity<span class="pl-k">:</span> <span class="pl-c1">0.85</span>,</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">        exitDelay<span class="pl-k">:</span> <span class="pl-c1">100</span>,</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">        key<span class="pl-k">:</span> <span class="pl-c1">JSON</span>.<span class="pl-smi">stringify</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">    arcConfig<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">      strokeColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#DD1C77<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">      strokeWidth<span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">      arcSharpness<span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">      animationSpeed<span class="pl-k">:</span> <span class="pl-c1">600</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">/*</span></span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    Getter for value. If not declared on datumValue, look up the chain into optionsValue</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">val</span>( <span class="pl-smi">datumValue</span>, <span class="pl-smi">optionsValue</span>, <span class="pl-smi">context</span> ) {</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( <span class="pl-k">typeof</span> context <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">      context <span class="pl-k">=</span> optionsValue;</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">      optionsValues <span class="pl-k">=</span> <span class="pl-c1">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> value <span class="pl-k">=</span> <span class="pl-k">typeof</span> datumValue <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> datumValue <span class="pl-k">:</span> optionsValue;</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">typeof</span> value <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>  <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( <span class="pl-k">typeof</span> value <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> fnContext <span class="pl-k">=</span> [context];</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> ( <span class="pl-smi">context</span>.<span class="pl-smi">geography</span> ) {</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">        fnContext <span class="pl-k">=</span> [<span class="pl-smi">context</span>.<span class="pl-smi">geography</span>, <span class="pl-smi">context</span>.<span class="pl-c1">data</span>];</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">value</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">null</span>, fnContext);</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> value;</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">addContainer</span>( <span class="pl-smi">element</span>, <span class="pl-smi">height</span>, <span class="pl-smi">width</span> ) {</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">svg</span> <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>( element ).<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>svg<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>, width <span class="pl-k">||</span> <span class="pl-smi">element</span>.<span class="pl-smi">offsetWidth</span>)</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-width<span class="pl-pds">&#39;</span></span>, width <span class="pl-k">||</span> <span class="pl-smi">element</span>.<span class="pl-smi">offsetWidth</span>)</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>datamap<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span>, height <span class="pl-k">||</span> <span class="pl-smi">element</span>.<span class="pl-smi">offsetHeight</span>)</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">      .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>overflow<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>hidden<span class="pl-pds">&#39;</span></span>); <span class="pl-c"><span class="pl-c">//</span> IE10+ doesn&#39;t respect height/width when map is zoomed in</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">responsive</span>) {</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">element</span>).<span class="pl-c1">style</span>({<span class="pl-s"><span class="pl-pds">&#39;</span>position<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>relative<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>padding-bottom<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> (<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">aspectRatio</span><span class="pl-k">*</span><span class="pl-c1">100</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>});</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">element</span>).<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>svg<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">style</span>({<span class="pl-s"><span class="pl-pds">&#39;</span>position<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>absolute<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>100%<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>100%<span class="pl-pds">&#39;</span></span>});</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">element</span>).<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>svg<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>g<span class="pl-pds">&#39;</span></span>).<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>path<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>vector-effect<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>non-scaling-stroke<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">svg</span>;</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> setProjection takes the svg element and options</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">setProjection</span>( <span class="pl-smi">element</span>, <span class="pl-smi">options</span> ) {</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> width <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-c1">width</span> <span class="pl-k">||</span> <span class="pl-smi">element</span>.<span class="pl-smi">offsetWidth</span>;</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> height <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-c1">height</span> <span class="pl-k">||</span> <span class="pl-smi">element</span>.<span class="pl-smi">offsetHeight</span>;</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> projection, path;</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> svg <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">svg</span>;</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( options <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-smi">options</span>.<span class="pl-c1">scope</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">options</span>.<span class="pl-c1">scope</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>world<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( <span class="pl-smi">options</span>.<span class="pl-c1">scope</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>usa<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">      projection <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-smi">geo</span>.<span class="pl-en">albersUsa</span>()</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">scale</span>(width)</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">translate</span>([width <span class="pl-k">/</span> <span class="pl-c1">2</span>, height <span class="pl-k">/</span> <span class="pl-c1">2</span>]);</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">else</span> <span class="pl-k">if</span> ( <span class="pl-smi">options</span>.<span class="pl-c1">scope</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>world<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">      projection <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-smi">geo</span>[<span class="pl-smi">options</span>.<span class="pl-smi">projection</span>]()</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">scale</span>((width <span class="pl-k">+</span> <span class="pl-c1">1</span>) <span class="pl-k">/</span> <span class="pl-c1">2</span> <span class="pl-k">/</span> <span class="pl-c1">Math</span>.<span class="pl-c1">PI</span>)</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">translate</span>([width <span class="pl-k">/</span> <span class="pl-c1">2</span>, height <span class="pl-k">/</span> (<span class="pl-smi">options</span>.<span class="pl-smi">projection</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>mercator<span class="pl-pds">&quot;</span></span> <span class="pl-k">?</span> <span class="pl-c1">1.45</span> <span class="pl-k">:</span> <span class="pl-c1">1.8</span>)]);</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( <span class="pl-smi">options</span>.<span class="pl-smi">projection</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>orthographic<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">svg</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>defs<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>path<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">datum</span>({type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Sphere<span class="pl-pds">&quot;</span></span>})</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>id<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>sphere<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span>, path);</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">svg</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>use<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">          .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>stroke<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">          .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>xlink:href<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>#sphere<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">svg</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>use<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">          .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>fill<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">          .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>xlink:href<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>#sphere<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">projection</span>.<span class="pl-en">scale</span>(<span class="pl-c1">250</span>).<span class="pl-en">clipAngle</span>(<span class="pl-c1">90</span>).<span class="pl-en">rotate</span>(<span class="pl-smi">options</span>.<span class="pl-smi">projectionConfig</span>.<span class="pl-smi">rotation</span>)</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">    path <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-smi">geo</span>.<span class="pl-en">path</span>()</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">projection</span>( projection );</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> {path<span class="pl-k">:</span> path, projection<span class="pl-k">:</span> projection};</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">addStyleBlock</span>() {</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.datamaps-style-block<span class="pl-pds">&#39;</span></span>).<span class="pl-en">empty</span>() ) {</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>head<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>style<span class="pl-pds">&#39;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>datamaps-style-block<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">html</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.datamap path.datamaps-graticule { fill: none; stroke: #777; stroke-width: 0.5px; stroke-opacity: .5; pointer-events: none; } .datamap .labels {pointer-events: none;} .datamap path {stroke: #FFFFFF; stroke-width: 1px;} .datamaps-legend dt, .datamaps-legend dd { float: left; margin: 0 3px 0 0;} .datamaps-legend dd {width: 20px; margin-right: 6px; border-radius: 3px;} .datamaps-legend {padding-bottom: 20px; z-index: 1001; position: absolute; left: 4px; font-size: 12px; font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;} .datamaps-hoverover {display: none; font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; } .hoverinfo {padding: 4px; border-radius: 1px; background-color: #FFF; box-shadow: 1px 1px 5px #CCC; font-size: 12px; border: 1px solid #CCC; } .hoverinfo hr {border:1px dotted #CCC; }<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">drawSubunits</span>( <span class="pl-smi">data</span> ) {</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> fillData <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">fills</span>,</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">        colorCodeData <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">data</span> <span class="pl-k">||</span> {},</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">        geoConfig <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">geographyConfig</span>;</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> subunits <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">svg</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>g.datamaps-subunits<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( <span class="pl-smi">subunits</span>.<span class="pl-en">empty</span>() ) {</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">      subunits <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">addLayer</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>datamaps-subunits<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">null</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> geoData <span class="pl-k">=</span> <span class="pl-smi">topojson</span>.<span class="pl-en">feature</span>( data, <span class="pl-smi">data</span>.<span class="pl-smi">objects</span>[ <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">scope</span> ] ).<span class="pl-smi">features</span>;</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( <span class="pl-smi">geoConfig</span>.<span class="pl-smi">hideAntarctica</span> ) {</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">      geoData <span class="pl-k">=</span> <span class="pl-smi">geoData</span>.<span class="pl-en">filter</span>(<span class="pl-k">function</span>(<span class="pl-smi">feature</span>) {</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">feature</span>.<span class="pl-c1">id</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>ATA<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( <span class="pl-smi">geoConfig</span>.<span class="pl-smi">hideHawaiiAndAlaska</span> ) {</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">      geoData <span class="pl-k">=</span> <span class="pl-smi">geoData</span>.<span class="pl-en">filter</span>(<span class="pl-k">function</span>(<span class="pl-smi">feature</span>) {</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">feature</span>.<span class="pl-c1">id</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>HI<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">feature</span>.<span class="pl-c1">id</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>AK<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> geo <span class="pl-k">=</span> <span class="pl-smi">subunits</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>path.datamaps-subunit<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">data</span>( geoData );</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">geo</span>.<span class="pl-en">enter</span>()</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">      .<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>path<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>d<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">this</span>.<span class="pl-smi">path</span>)</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>) {</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>datamaps-subunit <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">d</span>.<span class="pl-c1">id</span>;</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">      })</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-info<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>) {</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">JSON</span>.<span class="pl-c1">stringify</span>( colorCodeData[<span class="pl-smi">d</span>.<span class="pl-c1">id</span>]);</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">      })</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">      .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fill<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>) {</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span>if fillKey - use that</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span>otherwise check &#39;fill&#39;</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span>otherwise check &#39;defaultFill&#39;</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> fillColor;</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> datum <span class="pl-k">=</span> colorCodeData[<span class="pl-smi">d</span>.<span class="pl-c1">id</span>];</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( datum <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">datum</span>.<span class="pl-smi">fillKey</span> ) {</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">          fillColor <span class="pl-k">=</span> fillData[ <span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">fillKey</span>, {data<span class="pl-k">:</span> colorCodeData[<span class="pl-smi">d</span>.<span class="pl-c1">id</span>], geography<span class="pl-k">:</span> d}) ];</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( <span class="pl-k">typeof</span> fillColor <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">          fillColor <span class="pl-k">=</span> <span class="pl-en">val</span>(datum <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">datum</span>.<span class="pl-smi">fillColor</span>, <span class="pl-smi">fillData</span>.<span class="pl-smi">defaultFill</span>, {data<span class="pl-k">:</span> colorCodeData[<span class="pl-smi">d</span>.<span class="pl-c1">id</span>], geography<span class="pl-k">:</span> d});</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> fillColor;</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">      })</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">      .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>stroke-width<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">geoConfig</span>.<span class="pl-c1">borderWidth</span>)</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">      .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>stroke<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">geoConfig</span>.<span class="pl-c1">borderColor</span>);</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">handleGeographyConfig</span> () {</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> hoverover;</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> svg <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">svg</span>;</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> self <span class="pl-k">=</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> options <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">geographyConfig</span>;</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( <span class="pl-smi">options</span>.<span class="pl-smi">highlightOnHover</span> <span class="pl-k">||</span> <span class="pl-smi">options</span>.<span class="pl-smi">popupOnHover</span> ) {</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">svg</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.datamaps-subunit<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mouseover<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>) {</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> $this <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> datum <span class="pl-k">=</span> <span class="pl-smi">self</span>.<span class="pl-c1">options</span>.<span class="pl-c1">data</span>[<span class="pl-smi">d</span>.<span class="pl-c1">id</span>] <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> ( <span class="pl-smi">options</span>.<span class="pl-smi">highlightOnHover</span> ) {</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> previousAttributes <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>fill<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>  <span class="pl-smi">$this</span>.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fill<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>stroke<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-smi">$this</span>.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>stroke<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>stroke-width<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-smi">$this</span>.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>stroke-width<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>fill-opacity<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-smi">$this</span>.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fill-opacity<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">            $this</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">              .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fill<span class="pl-pds">&#39;</span></span>, <span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">highlightFillColor</span>, <span class="pl-smi">options</span>.<span class="pl-smi">highlightFillColor</span>, datum))</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">              .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>stroke<span class="pl-pds">&#39;</span></span>, <span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">highlightBorderColor</span>, <span class="pl-smi">options</span>.<span class="pl-smi">highlightBorderColor</span>, datum))</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">              .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>stroke-width<span class="pl-pds">&#39;</span></span>, <span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">highlightBorderWidth</span>, <span class="pl-smi">options</span>.<span class="pl-smi">highlightBorderWidth</span>, datum))</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">              .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fill-opacity<span class="pl-pds">&#39;</span></span>, <span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">highlightFillOpacity</span>, <span class="pl-smi">options</span>.<span class="pl-smi">highlightFillOpacity</span>, datum))</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">              .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-previousAttributes<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">JSON</span>.<span class="pl-c1">stringify</span>(previousAttributes));</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span>as per discussion on https://github.com/markmarkoh/datamaps/issues/19</span></td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> ( <span class="pl-k">!</span><span class="pl-sr"> <span class="pl-pds">/</span>((MSIE)<span class="pl-k">|</span>(Trident))<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(<span class="pl-c1">navigator</span>.<span class="pl-c1">userAgent</span>) ) {</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">             <span class="pl-smi">moveToFront</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> ( <span class="pl-smi">options</span>.<span class="pl-smi">popupOnHover</span> ) {</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">self</span>.<span class="pl-en">updatePopup</span>($this, d, options, svg);</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">        })</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mouseout<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> $this <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-smi">highlightOnHover</span>) {</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span>reapply previous attributes</span></td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> previousAttributes <span class="pl-k">=</span> <span class="pl-c1">JSON</span>.<span class="pl-c1">parse</span>( <span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-previousAttributes<span class="pl-pds">&#39;</span></span>) );</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">for</span> ( <span class="pl-k">var</span> attr <span class="pl-k">in</span> previousAttributes ) {</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">$this</span>.<span class="pl-c1">style</span>(attr, previousAttributes[attr]);</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$this</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mousemove<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.datamaps-hoverover<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>display<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">moveToFront</span>() {</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">appendChild</span>(<span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span>plugin to add a simple map legend</span></td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">addLegend</span>(<span class="pl-smi">layer</span>, <span class="pl-smi">data</span>, <span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">    data <span class="pl-k">=</span> data <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( <span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">fills</span> ) {</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> html <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dl&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> label <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( <span class="pl-smi">data</span>.<span class="pl-smi">legendTitle</span> ) {</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">      html <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;h2&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">data</span>.<span class="pl-smi">legendTitle</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/h2&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> html;</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> ( <span class="pl-k">var</span> fillKey <span class="pl-k">in</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">fills</span> ) {</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> ( fillKey <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>defaultFill<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span> <span class="pl-smi">data</span>.<span class="pl-smi">defaultFillName</span> ) {</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">        label <span class="pl-k">=</span> <span class="pl-smi">data</span>.<span class="pl-smi">defaultFillName</span>;</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">data</span>.<span class="pl-smi">labels</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">data</span>.<span class="pl-smi">labels</span>[fillKey]) {</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">          label <span class="pl-k">=</span> <span class="pl-smi">data</span>.<span class="pl-smi">labels</span>[fillKey];</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">          label<span class="pl-k">=</span> fillKey <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>: <span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">      html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dt&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> label <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/dt&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">      html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dd style=&quot;background-color:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span>  <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">fills</span>[fillKey] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;&amp;nbsp;&lt;/dd&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">    html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/dl&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> hoverover <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>( <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">element</span> ).<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>datamaps-legend<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">html</span>(html);</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">addGraticule</span> ( <span class="pl-smi">layer</span>, <span class="pl-smi">options</span> ) {</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> graticule <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-smi">geo</span>.<span class="pl-en">graticule</span>();</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">svg</span>.<span class="pl-en">insert</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>path<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>.datamaps-subunits<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">datum</span>(graticule)</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>datamaps-graticule<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">this</span>.<span class="pl-smi">path</span>);</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">handleArcs</span> (<span class="pl-smi">layer</span>, <span class="pl-smi">data</span>, <span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> self <span class="pl-k">=</span> <span class="pl-c1">this</span>,</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">        svg <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">svg</span>;</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( <span class="pl-k">!</span>data <span class="pl-k">||</span> (data <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">data</span>.<span class="pl-smi">slice</span>) ) {</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">throw</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Datamaps Error - arcs must be an array<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> For some reason arc options were put in an `options` object instead of the parent arc</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> I don&#39;t like this, so to match bubbles and other plugins I&#39;m moving it</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> This is to keep backwards compatability</span></td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> ( <span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">data</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">      data[i] <span class="pl-k">=</span> <span class="pl-en">defaults</span>(data[i], data[i].<span class="pl-c1">options</span>);</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">delete</span> data[i].<span class="pl-c1">options</span>;</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( <span class="pl-k">typeof</span> options <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">      options <span class="pl-k">=</span> <span class="pl-smi">defaultOptions</span>.<span class="pl-smi">arcConfig</span>;</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> arcs <span class="pl-k">=</span> <span class="pl-smi">layer</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>path.datamaps-arc<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">data</span>( data, <span class="pl-c1">JSON</span>.<span class="pl-smi">stringify</span> );</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> path <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-smi">geo</span>.<span class="pl-en">path</span>()</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">projection</span>(<span class="pl-smi">self</span>.<span class="pl-smi">projection</span>);</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">    arcs</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">enter</span>()</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">        .<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>svg:path<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>datamaps-arc<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">        .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>stroke-linecap<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>round<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">        .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>stroke<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">datum</span>) {</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">strokeColor</span>, <span class="pl-smi">options</span>.<span class="pl-smi">strokeColor</span>, datum);</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">        })</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">        .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fill<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">        .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>stroke-width<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">datum</span>) {</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">strokeWidth</span>, <span class="pl-smi">options</span>.<span class="pl-smi">strokeWidth</span>, datum);</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">        })</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>d<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">datum</span>) {</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> originXY <span class="pl-k">=</span> <span class="pl-smi">self</span>.<span class="pl-en">latLngToXY</span>(<span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">origin</span>.<span class="pl-smi">latitude</span>, datum), <span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">origin</span>.<span class="pl-smi">longitude</span>, datum))</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> destXY <span class="pl-k">=</span> <span class="pl-smi">self</span>.<span class="pl-en">latLngToXY</span>(<span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">destination</span>.<span class="pl-smi">latitude</span>, datum), <span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">destination</span>.<span class="pl-smi">longitude</span>, datum));</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> midXY <span class="pl-k">=</span> [ (originXY[<span class="pl-c1">0</span>] <span class="pl-k">+</span> destXY[<span class="pl-c1">0</span>]) <span class="pl-k">/</span> <span class="pl-c1">2</span>, (originXY[<span class="pl-c1">1</span>] <span class="pl-k">+</span> destXY[<span class="pl-c1">1</span>]) <span class="pl-k">/</span> <span class="pl-c1">2</span>];</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-smi">greatArc</span>) {</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">                  <span class="pl-c"><span class="pl-c">//</span> TODO: Move this to inside `if` clause when setting attr `d`</span></td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">var</span> greatArc <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-smi">geo</span>.<span class="pl-en">greatArc</span>()</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">                  .<span class="pl-c1">source</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> [<span class="pl-en">val</span>(<span class="pl-smi">d</span>.<span class="pl-smi">origin</span>.<span class="pl-smi">longitude</span>, d), <span class="pl-en">val</span>(<span class="pl-smi">d</span>.<span class="pl-smi">origin</span>.<span class="pl-smi">latitude</span>, d)]; })</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">                  .<span class="pl-c1">target</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> [<span class="pl-en">val</span>(<span class="pl-smi">d</span>.<span class="pl-smi">destination</span>.<span class="pl-smi">longitude</span>, d), <span class="pl-en">val</span>(<span class="pl-smi">d</span>.<span class="pl-smi">destination</span>.<span class="pl-smi">latitude</span>, d)]; });</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">return</span> <span class="pl-en">path</span>(<span class="pl-en">greatArc</span>(datum))</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> sharpness <span class="pl-k">=</span> <span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">arcSharpness</span>, <span class="pl-smi">options</span>.<span class="pl-smi">arcSharpness</span>, datum);</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>M<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> originXY[<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> originXY[<span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>S<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (midXY[<span class="pl-c1">0</span>] <span class="pl-k">+</span> (<span class="pl-c1">50</span> <span class="pl-k">*</span> sharpness)) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (midXY[<span class="pl-c1">1</span>] <span class="pl-k">-</span> (<span class="pl-c1">75</span> <span class="pl-k">*</span> sharpness)) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> destXY[<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> destXY[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">        })</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">transition</span>()</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">          .<span class="pl-en">delay</span>(<span class="pl-c1">100</span>)</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">          .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fill<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">datum</span>) {</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">/*</span></span></td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line"><span class="pl-c">              Thank you Jake Archibald, this is awesome.</span></td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line"><span class="pl-c">              Source: http://jakearchibald.com/2013/animated-line-drawing-svg/</span></td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line"><span class="pl-c">            <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> length <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getTotalLength</span>();</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-c1">style</span>.<span class="pl-smi">transition</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">style</span>.<span class="pl-smi">WebkitTransition</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-c1">style</span>.<span class="pl-smi">strokeDasharray</span> <span class="pl-k">=</span> length <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> length;</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-c1">style</span>.<span class="pl-smi">strokeDashoffset</span> <span class="pl-k">=</span> length;</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-c1">getBoundingClientRect</span>();</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-c1">style</span>.<span class="pl-smi">transition</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">style</span>.<span class="pl-smi">WebkitTransition</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>stroke-dashoffset <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">animationSpeed</span>, <span class="pl-smi">options</span>.<span class="pl-smi">animationSpeed</span>, datum) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ms ease-out<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-c1">style</span>.<span class="pl-smi">strokeDashoffset</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">          })</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">arcs</span>.<span class="pl-en">exit</span>()</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">transition</span>()</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">      .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>opacity<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">      .<span class="pl-c1">remove</span>();</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">handleLabels</span> ( <span class="pl-smi">layer</span>, <span class="pl-smi">options</span> ) {</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> self <span class="pl-k">=</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">    options <span class="pl-k">=</span> options <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> labelStartCoodinates <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">projection</span>([<span class="pl-k">-</span><span class="pl-c1">67.707617</span>, <span class="pl-c1">42.722131</span>]);</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">svg</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.datamaps-subunit<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data-foo<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>) {</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> center <span class="pl-k">=</span> <span class="pl-smi">self</span>.<span class="pl-smi">path</span>.<span class="pl-en">centroid</span>(d);</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xOffset <span class="pl-k">=</span> <span class="pl-c1">7.5</span>, yOffset <span class="pl-k">=</span> <span class="pl-c1">5</span>;</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( [<span class="pl-s"><span class="pl-pds">&quot;</span>FL<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>KY<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>MI<span class="pl-pds">&quot;</span></span>].<span class="pl-c1">indexOf</span>(<span class="pl-smi">d</span>.<span class="pl-c1">id</span>) <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span> ) xOffset <span class="pl-k">=</span> <span class="pl-k">-</span><span class="pl-c1">2.5</span>;</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( <span class="pl-smi">d</span>.<span class="pl-c1">id</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>NY<span class="pl-pds">&quot;</span></span> ) xOffset <span class="pl-k">=</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( <span class="pl-smi">d</span>.<span class="pl-c1">id</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>MI<span class="pl-pds">&quot;</span></span> ) yOffset <span class="pl-k">=</span> <span class="pl-c1">18</span>;</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( <span class="pl-smi">d</span>.<span class="pl-c1">id</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>LA<span class="pl-pds">&quot;</span></span> ) xOffset <span class="pl-k">=</span> <span class="pl-c1">13</span>;</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> x,y;</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">        x <span class="pl-k">=</span> center[<span class="pl-c1">0</span>] <span class="pl-k">-</span> xOffset;</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">        y <span class="pl-k">=</span> center[<span class="pl-c1">1</span>] <span class="pl-k">+</span> yOffset;</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> smallStateIndex <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>VT<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>NH<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>MA<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>RI<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>CT<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>NJ<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>DE<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>MD<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>DC<span class="pl-pds">&quot;</span></span>].<span class="pl-c1">indexOf</span>(<span class="pl-smi">d</span>.<span class="pl-c1">id</span>);</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( smallStateIndex <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> yStart <span class="pl-k">=</span> labelStartCoodinates[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">          x <span class="pl-k">=</span> labelStartCoodinates[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">          y <span class="pl-k">=</span> yStart <span class="pl-k">+</span> (smallStateIndex <span class="pl-k">*</span> (<span class="pl-c1">2</span><span class="pl-k">+</span> (<span class="pl-smi">options</span>.<span class="pl-c1">fontSize</span> <span class="pl-k">||</span> <span class="pl-c1">12</span>)));</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">layer</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>line<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">            .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>x1<span class="pl-pds">&quot;</span></span>, x <span class="pl-k">-</span> <span class="pl-c1">3</span>)</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">            .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>y1<span class="pl-pds">&quot;</span></span>, y <span class="pl-k">-</span> <span class="pl-c1">5</span>)</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">            .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>x2<span class="pl-pds">&quot;</span></span>, center[<span class="pl-c1">0</span>])</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">            .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>y2<span class="pl-pds">&quot;</span></span>, center[<span class="pl-c1">1</span>])</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">            .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>stroke<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">options</span>.<span class="pl-smi">labelColor</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>#000<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">            .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>stroke-width<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">options</span>.<span class="pl-smi">lineWidth</span> <span class="pl-k">||</span> <span class="pl-c1">1</span>)</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">layer</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>text<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">          .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>x<span class="pl-pds">&quot;</span></span>, x)</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">          .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>y<span class="pl-pds">&quot;</span></span>, y)</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">          .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>font-size<span class="pl-pds">&quot;</span></span>, (<span class="pl-smi">options</span>.<span class="pl-c1">fontSize</span> <span class="pl-k">||</span> <span class="pl-c1">10</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">          .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>font-family<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">options</span>.<span class="pl-c1">fontFamily</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Verdana<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">          .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>fill<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">options</span>.<span class="pl-smi">labelColor</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>#000<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">          .<span class="pl-c1">text</span>( <span class="pl-smi">d</span>.<span class="pl-c1">id</span> );</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>bar<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">handleBubbles</span> (<span class="pl-smi">layer</span>, <span class="pl-smi">data</span>, <span class="pl-smi">options</span> ) {</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> self <span class="pl-k">=</span> <span class="pl-c1">this</span>,</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">        fillData <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">fills</span>,</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">        filterData <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">filters</span>,</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">        svg <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">svg</span>;</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( <span class="pl-k">!</span>data <span class="pl-k">||</span> (data <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">data</span>.<span class="pl-smi">slice</span>) ) {</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">throw</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Datamaps Error - bubbles must be an array<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> bubbles <span class="pl-k">=</span> <span class="pl-smi">layer</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>circle.datamaps-bubble<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">data</span>( data, <span class="pl-smi">options</span>.<span class="pl-smi">key</span> );</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">    bubbles</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">enter</span>()</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">        .<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>svg:circle<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>datamaps-bubble<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>cx<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> ( <span class="pl-smi">datum</span> ) {</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> latLng;</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> ( <span class="pl-en">datumHasCoords</span>(datum) ) {</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">            latLng <span class="pl-k">=</span> <span class="pl-smi">self</span>.<span class="pl-en">latLngToXY</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">latitude</span>, <span class="pl-smi">datum</span>.<span class="pl-smi">longitude</span>);</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">else</span> <span class="pl-k">if</span> ( <span class="pl-smi">datum</span>.<span class="pl-smi">centered</span> ) {</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">            latLng <span class="pl-k">=</span> <span class="pl-smi">self</span>.<span class="pl-smi">path</span>.<span class="pl-en">centroid</span>(<span class="pl-smi">svg</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>path.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">datum</span>.<span class="pl-smi">centered</span>).<span class="pl-c1">data</span>()[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> ( latLng ) <span class="pl-k">return</span> latLng[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">        })</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>cy<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> ( <span class="pl-smi">datum</span> ) {</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> latLng;</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> ( <span class="pl-en">datumHasCoords</span>(datum) ) {</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">            latLng <span class="pl-k">=</span> <span class="pl-smi">self</span>.<span class="pl-en">latLngToXY</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">latitude</span>, <span class="pl-smi">datum</span>.<span class="pl-smi">longitude</span>);</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">else</span> <span class="pl-k">if</span> ( <span class="pl-smi">datum</span>.<span class="pl-smi">centered</span> ) {</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">            latLng <span class="pl-k">=</span> <span class="pl-smi">self</span>.<span class="pl-smi">path</span>.<span class="pl-en">centroid</span>(<span class="pl-smi">svg</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>path.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">datum</span>.<span class="pl-smi">centered</span>).<span class="pl-c1">data</span>()[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> ( latLng ) <span class="pl-k">return</span> latLng[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">        })</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>r<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">datum</span>) {</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">          <span class="pl-c"><span class="pl-c">//</span> if animation enabled start with radius 0, otherwise use full size.</span></td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-smi">options</span>.<span class="pl-smi">animate</span> <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">radius</span>, <span class="pl-smi">options</span>.<span class="pl-smi">radius</span>, datum);</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">        })</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-info<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>) {</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-c1">JSON</span>.<span class="pl-c1">stringify</span>(d);</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">        })</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>filter<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">datum</span>) {</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> filterKey <span class="pl-k">=</span> filterData[ <span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">filterKey</span>, <span class="pl-smi">options</span>.<span class="pl-smi">filterKey</span>, datum) ];</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (filterKey) {</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> filterKey;</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">        })</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">        .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>stroke<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> ( <span class="pl-smi">datum</span> ) {</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-c1">borderColor</span>, <span class="pl-smi">options</span>.<span class="pl-c1">borderColor</span>, datum);</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">        })</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">        .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>stroke-width<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> ( <span class="pl-smi">datum</span> ) {</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-c1">borderWidth</span>, <span class="pl-smi">options</span>.<span class="pl-c1">borderWidth</span>, datum);</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">        })</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">        .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fill-opacity<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> ( <span class="pl-smi">datum</span> ) {</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">fillOpacity</span>, <span class="pl-smi">options</span>.<span class="pl-smi">fillOpacity</span>, datum);</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">        })</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">        .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fill<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> ( <span class="pl-smi">datum</span> ) {</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> fillColor <span class="pl-k">=</span> fillData[ <span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">fillKey</span>, <span class="pl-smi">options</span>.<span class="pl-smi">fillKey</span>, datum) ];</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> fillColor <span class="pl-k">||</span> <span class="pl-smi">fillData</span>.<span class="pl-smi">defaultFill</span>;</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">        })</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mouseover<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> ( <span class="pl-smi">datum</span> ) {</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> $this <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-smi">highlightOnHover</span>) {</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span>save all previous attributes for mouseout</span></td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> previousAttributes <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>fill<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>  <span class="pl-smi">$this</span>.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fill<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>stroke<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-smi">$this</span>.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>stroke<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>stroke-width<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-smi">$this</span>.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>stroke-width<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>fill-opacity<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-smi">$this</span>.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fill-opacity<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">            $this</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">              .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fill<span class="pl-pds">&#39;</span></span>, <span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">highlightFillColor</span>, <span class="pl-smi">options</span>.<span class="pl-smi">highlightFillColor</span>, datum))</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">              .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>stroke<span class="pl-pds">&#39;</span></span>, <span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">highlightBorderColor</span>, <span class="pl-smi">options</span>.<span class="pl-smi">highlightBorderColor</span>, datum))</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">              .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>stroke-width<span class="pl-pds">&#39;</span></span>, <span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">highlightBorderWidth</span>, <span class="pl-smi">options</span>.<span class="pl-smi">highlightBorderWidth</span>, datum))</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">              .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fill-opacity<span class="pl-pds">&#39;</span></span>, <span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">highlightFillOpacity</span>, <span class="pl-smi">options</span>.<span class="pl-smi">highlightFillOpacity</span>, datum))</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">              .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-previousAttributes<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">JSON</span>.<span class="pl-c1">stringify</span>(previousAttributes));</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-smi">popupOnHover</span>) {</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">self</span>.<span class="pl-en">updatePopup</span>($this, datum, options, svg);</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">        })</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mouseout<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> ( <span class="pl-smi">datum</span> ) {</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> $this <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-smi">highlightOnHover</span>) {</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span>reapply previous attributes</span></td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> previousAttributes <span class="pl-k">=</span> <span class="pl-c1">JSON</span>.<span class="pl-c1">parse</span>( <span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-previousAttributes<span class="pl-pds">&#39;</span></span>) );</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">for</span> ( <span class="pl-k">var</span> attr <span class="pl-k">in</span> previousAttributes ) {</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">$this</span>.<span class="pl-c1">style</span>(attr, previousAttributes[attr]);</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.datamaps-hoverover<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>display<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">        })</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">bubbles</span>.<span class="pl-en">transition</span>()</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">duration</span>(<span class="pl-c1">400</span>)</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>r<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> ( <span class="pl-smi">datum</span> ) {</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-en">val</span>(<span class="pl-smi">datum</span>.<span class="pl-smi">radius</span>, <span class="pl-smi">options</span>.<span class="pl-smi">radius</span>, datum);</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">bubbles</span>.<span class="pl-en">exit</span>()</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">transition</span>()</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">delay</span>(<span class="pl-smi">options</span>.<span class="pl-smi">exitDelay</span>)</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>r<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">        .<span class="pl-c1">remove</span>();</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">datumHasCoords</span> (<span class="pl-smi">datum</span>) {</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-k">typeof</span> datum <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-smi">datum</span>.<span class="pl-smi">latitude</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-smi">datum</span>.<span class="pl-smi">longitude</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span>stolen from underscore.js</span></td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">defaults</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">slice</span>.<span class="pl-c1">call</span>(<span class="pl-c1">arguments</span>, <span class="pl-c1">1</span>).<span class="pl-c1">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">source</span>) {</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (source) {</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">var</span> prop <span class="pl-k">in</span> source) {</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (obj[prop] <span class="pl-k">==</span> <span class="pl-c1">null</span>) obj[prop] <span class="pl-k">=</span> source[prop];</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> obj;</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">/**</span>************************************</span></td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             Public Functions</span></td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  **************************************<span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">Datamap</span>( <span class="pl-smi">options</span> ) {</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( <span class="pl-k">typeof</span> d3 <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> <span class="pl-k">typeof</span> topojson <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Include d3.js (v3.0.3 or greater) and topojson on this page before creating a new map<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">   }</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span>set options for global use</span></td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-c1">options</span> <span class="pl-k">=</span> <span class="pl-en">defaults</span>(options, defaultOptions);</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">geographyConfig</span> <span class="pl-k">=</span> <span class="pl-en">defaults</span>(<span class="pl-smi">options</span>.<span class="pl-smi">geographyConfig</span>, <span class="pl-smi">defaultOptions</span>.<span class="pl-smi">geographyConfig</span>);</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">projectionConfig</span> <span class="pl-k">=</span> <span class="pl-en">defaults</span>(<span class="pl-smi">options</span>.<span class="pl-smi">projectionConfig</span>, <span class="pl-smi">defaultOptions</span>.<span class="pl-smi">projectionConfig</span>);</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">bubblesConfig</span> <span class="pl-k">=</span> <span class="pl-en">defaults</span>(<span class="pl-smi">options</span>.<span class="pl-smi">bubblesConfig</span>, <span class="pl-smi">defaultOptions</span>.<span class="pl-smi">bubblesConfig</span>);</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">arcConfig</span> <span class="pl-k">=</span> <span class="pl-en">defaults</span>(<span class="pl-smi">options</span>.<span class="pl-smi">arcConfig</span>, <span class="pl-smi">defaultOptions</span>.<span class="pl-smi">arcConfig</span>);</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span>add the SVG container</span></td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>( <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">element</span> ).<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>svg<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> ) {</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">addContainer</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>, <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">element</span>, <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">height</span>, <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">width</span> );</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/*</span> Add core plugins to this instance <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">addPlugin</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bubbles<span class="pl-pds">&#39;</span></span>, handleBubbles);</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">addPlugin</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>legend<span class="pl-pds">&#39;</span></span>, addLegend);</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">addPlugin</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>arc<span class="pl-pds">&#39;</span></span>, handleArcs);</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">addPlugin</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>labels<span class="pl-pds">&#39;</span></span>, handleLabels);</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">addPlugin</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>graticule<span class="pl-pds">&#39;</span></span>, addGraticule);</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span>append style block with basic hoverover styles</span></td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( <span class="pl-k">!</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">disableDefaultStyles</span> ) {</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">addStyleBlock</span>();</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">draw</span>();</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> resize map</span></td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">resize</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> self <span class="pl-k">=</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> options <span class="pl-k">=</span> <span class="pl-smi">self</span>.<span class="pl-c1">options</span>;</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-smi">responsive</span>) {</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> newsize <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-smi">element</span>.<span class="pl-smi">clientWidth</span>,</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">          oldsize <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>( <span class="pl-smi">options</span>.<span class="pl-smi">element</span>).<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>svg<span class="pl-pds">&#39;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-width<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-smi">options</span>.<span class="pl-smi">element</span>).<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>svg<span class="pl-pds">&#39;</span></span>).<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>g<span class="pl-pds">&#39;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>transform<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>scale(<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (newsize <span class="pl-k">/</span> oldsize) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> actually draw the features(states &amp; countries)</span></td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">draw</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span>save off in a closure</span></td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> self <span class="pl-k">=</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> options <span class="pl-k">=</span> <span class="pl-smi">self</span>.<span class="pl-c1">options</span>;</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span>set projections and paths based on scope</span></td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> pathAndProjection <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-smi">setProjection</span>.<span class="pl-c1">apply</span>(self, [<span class="pl-smi">options</span>.<span class="pl-smi">element</span>, options] );</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">path</span> <span class="pl-k">=</span> <span class="pl-smi">pathAndProjection</span>.<span class="pl-smi">path</span>;</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">projection</span> <span class="pl-k">=</span> <span class="pl-smi">pathAndProjection</span>.<span class="pl-smi">projection</span>;</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span>if custom URL for topojson data, retrieve it and render</span></td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( <span class="pl-smi">options</span>.<span class="pl-smi">geographyConfig</span>.<span class="pl-smi">dataUrl</span> ) {</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">d3</span>.<span class="pl-en">json</span>( <span class="pl-smi">options</span>.<span class="pl-smi">geographyConfig</span>.<span class="pl-smi">dataUrl</span>, <span class="pl-k">function</span>(<span class="pl-smi">error</span>, <span class="pl-smi">results</span>) {</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( error ) <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(error);</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">self</span>.<span class="pl-smi">customTopo</span> <span class="pl-k">=</span> results;</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">draw</span>( results );</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">draw</span>( <span class="pl-c1">this</span>[<span class="pl-smi">options</span>.<span class="pl-c1">scope</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Topo<span class="pl-pds">&#39;</span></span>] <span class="pl-k">||</span> <span class="pl-smi">options</span>.<span class="pl-smi">geographyConfig</span>.<span class="pl-smi">dataJson</span>);</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">function</span> <span class="pl-en">draw</span> (<span class="pl-smi">data</span>) {</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> if fetching remote data, draw the map first then call `updateChoropleth`</span></td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( <span class="pl-smi">self</span>.<span class="pl-c1">options</span>.<span class="pl-smi">dataUrl</span> ) {</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">          <span class="pl-c"><span class="pl-c">//</span>allow for csv or json data types</span></td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">          d3[<span class="pl-smi">self</span>.<span class="pl-c1">options</span>.<span class="pl-smi">dataType</span>](<span class="pl-smi">self</span>.<span class="pl-c1">options</span>.<span class="pl-smi">dataUrl</span>, <span class="pl-k">function</span>(<span class="pl-smi">data</span>) {</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span>in the case of csv, transform data to object</span></td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> ( <span class="pl-smi">self</span>.<span class="pl-c1">options</span>.<span class="pl-smi">dataType</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>csv<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> (data <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">data</span>.<span class="pl-smi">slice</span>) ) {</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">var</span> tmpData <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">for</span>(<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">data</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">                tmpData[data[i].<span class="pl-c1">id</span>] <span class="pl-k">=</span> data[i];</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">              data <span class="pl-k">=</span> tmpData;</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Datamaps</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">updateChoropleth</span>.<span class="pl-c1">call</span>(self, data);</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">drawSubunits</span>.<span class="pl-c1">call</span>(self, data);</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">handleGeographyConfig</span>.<span class="pl-c1">call</span>(self);</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( <span class="pl-smi">self</span>.<span class="pl-c1">options</span>.<span class="pl-smi">geographyConfig</span>.<span class="pl-smi">popupOnHover</span> <span class="pl-k">||</span> <span class="pl-smi">self</span>.<span class="pl-c1">options</span>.<span class="pl-smi">bubblesConfig</span>.<span class="pl-smi">popupOnHover</span>) {</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">          hoverover <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>( <span class="pl-smi">self</span>.<span class="pl-c1">options</span>.<span class="pl-smi">element</span> ).<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">            .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>datamaps-hoverover<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">            .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>z-index<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">10001</span>)</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">            .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>position<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>absolute<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span>fire off finished callback</span></td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">self</span>.<span class="pl-c1">options</span>.<span class="pl-en">done</span>(self);</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">/**</span>************************************</span></td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                TopoJSON</span></td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  **************************************<span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">worldTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__WORLD__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">abwTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ABW__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">afgTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__AFG__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">agoTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__AGO__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">aiaTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__AIA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">albTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ALB__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">aldTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ALD__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">andTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__AND__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">areTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ARE__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">argTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ARG__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">armTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ARM__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">asmTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ASM__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">ataTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ATA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">atcTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ATC__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">atfTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ATF__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">atgTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ATG__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">  Datamap.prototype.ausTopo = {&quot;type&quot;:&quot;Topology&quot;,&quot;objects&quot;:{&quot;aus&quot;:{&quot;type&quot;:&quot;GeometryCollection&quot;,&quot;geometries&quot;:[{&quot;type&quot;:&quot;Polygon&quot;,&quot;properties&quot;:{&quot;name&quot;:&quot;Macquarie Island&quot;},&quot;id&quot;:&quot;AU&quot;,&quot;arcs&quot;:[[0]]},{&quot;type&quot;:&quot;Polygon&quot;,&quot;properties&quot;:{&quot;name&quot;:&quot;Jervis Bay Territory&quot;},&quot;id&quot;:&quot;AU.JB&quot;,&quot;arcs&quot;:[[1,2]]},{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;properties&quot;:{&quot;name&quot;:&quot;Northern Territory&quot;},&quot;id&quot;:&quot;AU.NT&quot;,&quot;arcs&quot;:[[[3]],[[4]],[[5]],[[6]],[[7]],[[8]],[[9]],[[10]],[[11]],[[12]],[[13]],[[14]],[[15]],[[16]],[[17]],[[18]],[[19]],[[20]],[[21]],[[22]],[[23]],[[24]],[[25]],[[26]],[[27]],[[28]],[[29]],[[30]],[[31]],[[32]],[[33]],[[34]],[[35]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[47]],[[48]],[[49]],[[50]],[[51]],[[52]],[[53,54,55,56]],[[57]],[[58]],[[59]],[[60]]]},{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;properties&quot;:{&quot;name&quot;:&quot;Western Australia&quot;},&quot;id&quot;:&quot;AU.WA&quot;,&quot;arcs&quot;:[[[61]],[[62]],[[63]],[[64]],[[65]],[[66]],[[67]],[[68]],[[69]],[[70]],[[71]],[[72]],[[73]],[[74]],[[75]],[[76]],[[77]],[[78]],[[79]],[[80]],[[81]],[[82]],[[83]],[[84]],[[85]],[[86]],[[87]],[[88]],[[89]],[[90]],[[91]],[[92]],[[93]],[[94]],[[95]],[[96]],[[97]],[[98]],[[99]],[[100]],[[101]],[[102]],[[103]],[[104]],[[105]],[[106]],[[107]],[[108]],[[109]],[[110]],[[111]],[[112]],[[113]],[[114]],[[115]],[[116]],[[117]],[[118]],[[119]],[[-56,120,121]]]},{&quot;type&quot;:&quot;Polygon&quot;,&quot;properties&quot;:{&quot;name&quot;:&quot;Australian Capital Territory&quot;},&quot;id&quot;:&quot;AU.CT&quot;,&quot;arcs&quot;:[[122]]},{&quot;type&quot;:&quot;Polygon&quot;,&quot;properties&quot;:{&quot;name&quot;:&quot;New South Wales&quot;},&quot;id&quot;:&quot;AU.NS&quot;,&quot;arcs&quot;:[[-2,123,124,125,126,127],[-123]]},{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;properties&quot;:{&quot;name&quot;:&quot;South Australia&quot;},&quot;id&quot;:&quot;AU.SA&quot;,&quot;arcs&quot;:[[[128]],[[129]],[[130]],[[131]],[[132]],[[133]],[[134,135,-121,-55,136,-126]]]},{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;properties&quot;:{&quot;name&quot;:&quot;Victoria&quot;},&quot;id&quot;:&quot;AU.VI&quot;,&quot;arcs&quot;:[[[137]],[[138]],[[139]],[[140,-135,-125]]]},{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;properties&quot;:{&quot;name&quot;:&quot;Queensland&quot;},&quot;id&quot;:&quot;AU.QL&quot;,&quot;arcs&quot;:[[[141]],[[142]],[[143]],[[144]],[[145]],[[146]],[[147]],[[148]],[[149]],[[150]],[[151]],[[152]],[[153]],[[154]],[[155]],[[156]],[[157]],[[158]],[[159]],[[160]],[[161]],[[162]],[[163]],[[164]],[[165]],[[166]],[[167]],[[168]],[[169]],[[170]],[[171]],[[172]],[[173]],[[174]],[[175]],[[176]],[[177]],[[178]],[[179]],[[180]],[[181]],[[182]],[[183]],[[184]],[[185]],[[186]],[[187]],[[188]],[[189]],[[190]],[[191]],[[-127,-137,-54,192]],[[193]],[[194]],[[195]],[[196]],[[197]],[[198]],[[199]],[[200]],[[201]],[[202]],[[203]],[[204]],[[205]],[[206]],[[207]],[[208]]]},{&quot;type&quot;:&quot;Polygon&quot;,&quot;properties&quot;:{&quot;name&quot;:&quot;Norfolk Island&quot;},&quot;id&quot;:&quot;AU.CT&quot;,&quot;arcs&quot;:[[209]]},{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;properties&quot;:{&quot;name&quot;:&quot;Tasmania&quot;},&quot;id&quot;:&quot;AU.TS&quot;,&quot;arcs&quot;:[[[210]],[[211]],[[212]],[[213]],[[214]],[[215]],[[216]],[[217]],[[218]],[[219]],[[220]],[[221]],[[222]],[[223]],[[224]]]}]}},&quot;arcs&quot;:[[[9953,53],[3,3],[9,2],[3,4],[0,-5],[-2,-13],[-1,-5],[-5,-9],[-2,-8],[-5,-8],[-1,-4],[-1,-6],[-1,-3],[-3,-1],[-6,0],[-1,3],[0,1],[1,1],[-1,4],[0,4],[3,8],[0,1],[2,2],[1,2],[-1,0],[0,1],[-1,2],[0,1],[1,2],[1,1],[1,1],[1,2],[2,4],[3,13]],[[8160,4298],[5,10],[8,4],[7,1]],[[8180,4313],[0,-1],[4,-2],[3,0],[3,2],[4,0],[0,-2],[0,-3],[-1,-4],[-1,-3],[-2,-1],[-2,0],[-1,1],[-1,-1],[-1,-1],[-1,-1],[-2,-1],[-2,0],[-4,5],[-10,-1],[-6,-2]],[[5147,8571],[-7,-9],[-1,2],[-3,2],[-3,3],[-2,4],[-1,4],[1,4],[4,3],[3,1],[4,3],[1,-4],[3,-1],[3,-2],[2,-2],[-1,-4],[-3,-4]],[[5170,8592],[3,-2],[3,-3],[1,-3],[-2,-2],[-3,1],[-1,3],[-2,0],[-3,0],[-1,-2],[2,-5],[1,-1],[1,0],[0,-2],[-1,-1],[-1,-1],[-3,-1],[-4,-3],[-3,-1],[-2,1],[1,5],[1,5],[1,5],[-3,6],[4,1],[7,-1],[4,1]],[[5212,8603],[2,0],[3,0],[1,-2],[1,-5],[4,-3],[3,2],[1,0],[1,-4],[3,-1],[0,-7],[0,-9],[0,-3],[-1,-3],[0,-1],[2,-1],[2,-1],[2,-2],[-1,-6],[-2,-4],[-4,-6],[-6,3],[-1,4],[0,2],[-2,3],[-2,0],[-3,1],[-2,1],[-3,8],[0,1],[0,5],[-1,2],[-2,0],[-2,0],[-1,0],[-1,0],[-1,-4],[-1,0],[-1,1],[-1,1],[1,5],[0,3],[1,4],[2,2],[2,4],[3,-4],[2,-1],[1,0],[-2,6],[2,1],[2,3],[-1,5]],[[5142,8603],[0,-1],[1,0],[1,-1],[0,-1],[0,-1],[-1,0],[-2,1],[-1,-1],[-2,1],[-1,0],[0,2],[1,1],[2,0],[2,0]],[[5178,8609],[0,-3],[-1,0],[-3,0],[-2,0],[-1,0],[-3,1],[-2,-1],[-1,1],[2,3],[3,1],[5,0],[2,0],[1,-2]],[[5127,8599],[-3,-5],[-2,1],[-4,-1],[-3,2],[-1,-2],[-1,-1],[-4,-1],[-1,1],[-1,1],[-2,2],[2,1],[1,3],[-2,3],[-1,1],[3,3],[2,2],[1,2],[0,2],[-1,2],[0,1],[4,1],[5,1],[4,2],[4,0],[3,-5],[-3,-5],[0,-11]],[[5183,8596],[-3,-2],[0,1],[0,1],[-1,0],[0,1],[1,0],[0,1],[-1,2],[-1,2],[1,1],[1,1],[1,1],[1,2],[0,1],[-1,1],[-2,2],[0,1],[1,4],[2,3],[3,3],[3,2],[-2,-5],[1,-5],[4,-10],[-3,0],[-2,-2],[-1,-2],[1,-3],[-2,-1],[-1,0]],[[4946,8758],[-1,-3],[-3,1],[-4,0],[-5,-3],[-3,1],[-1,1],[2,2],[2,1],[2,2],[1,3],[0,1],[-2,1],[-1,1],[2,0],[1,2],[2,2],[4,-1],[3,-2],[1,-5],[0,-4]],[[3618,8762],[-1,-1],[-3,2],[-1,2],[-4,4],[-1,3],[-1,4],[0,1],[2,-1],[4,-2],[2,-2],[2,-2],[1,-3],[1,-3],[-1,-2]],[[3640,8776],[-3,-2],[-4,1],[-5,3],[-1,2],[2,0],[5,-1],[5,-2],[1,-1]],[[3609,8753],[0,-11],[0,2],[-1,2],[-1,2],[-2,1],[-3,5],[-5,11],[-3,4],[-3,8],[-1,1],[1,3],[2,-1],[2,-1],[2,-1],[9,-14],[2,-5],[1,-6]],[[5075,8987],[-4,0],[-2,2],[1,2],[4,4],[3,0],[0,-5],[-2,-3]],[[5172,8994],[0,-1],[0,1],[0,1],[1,1],[1,1],[-2,-2],[0,-1]],[[5108,9001],[-1,0],[-2,0],[-7,9],[0,3],[2,2],[3,1],[2,1],[1,2],[0,1],[1,0],[1,0],[1,-1],[2,-3],[2,-5],[-2,-2],[1,-4],[-1,-2],[-3,-2]],[[5057,9011],[-2,-1],[-2,0],[-2,0],[-1,-4],[3,0],[2,-1],[1,-3],[1,-3],[-4,0],[-1,-3],[-1,-4],[-1,-4],[-2,-1],[-3,-2],[-3,0],[-3,0],[2,2],[0,1],[0,1],[0,1],[1,1],[-1,3],[-4,9],[-2,2],[-5,-1],[-1,-6],[2,-5],[0,-5],[-8,4],[-1,2],[0,20],[8,-4],[2,0],[2,3],[0,5],[2,4],[3,4],[3,2],[2,-1],[3,0],[3,-2],[1,-1],[2,-3],[2,-1],[3,-1],[1,-1],[0,-3],[0,-1],[0,-1],[-2,-2]],[[5153,9022],[-2,-4],[-6,-3],[-2,-3],[0,-2],[1,-3],[2,-1],[3,-1],[2,0],[3,0],[-2,-1],[-3,-5],[2,-3],[0,-3],[1,-2],[3,-3],[3,-1],[11,-2],[4,1],[3,2],[2,3],[1,4],[-1,2],[-1,1],[-1,0],[-2,-1],[1,1],[1,1],[3,9],[3,-1],[7,0],[3,-1],[1,-1],[2,-3],[2,-3],[0,-3],[-2,-3],[-7,-6],[-2,-3],[-4,-12],[-7,2],[-7,-3],[-5,-6],[-2,-7],[1,-4],[2,-2],[2,-1],[3,-2],[2,-1],[1,-1],[-1,-1],[-2,0],[-2,-1],[-1,-1],[0,-2],[-4,1],[-2,-1],[-1,-3],[1,-3],[-3,3],[-2,1],[-3,-1],[-3,-2],[1,-2],[0,-4],[-1,-6],[3,-8],[0,-3],[1,-2],[3,0],[4,-1],[6,1],[0,2],[0,3],[2,3],[4,-2],[13,-10],[2,-1],[3,3],[2,2],[1,2],[1,3],[1,4],[2,0],[2,-2],[3,0],[3,1],[4,1],[-2,-2],[-2,-2],[-2,-4],[-1,0],[-1,0],[-1,0],[0,-1],[0,-2],[1,-2],[0,-2],[1,0],[1,-2],[1,-2],[-1,-1],[-3,-1],[0,-3],[1,-3],[2,-2],[-3,1],[-1,-1],[-1,-1],[2,-2],[-3,2],[-3,1],[-1,-1],[-1,-3],[-7,4],[-4,1],[-3,-2],[-3,2],[-4,1],[-9,1],[-4,2],[-3,0],[-2,-1],[-9,-5],[-9,1],[-39,14],[-1,0],[-4,4],[-2,0],[-2,0],[-8,-2],[-5,-4],[-3,-1],[-1,-1],[-2,0],[-1,1],[1,3],[1,1],[5,3],[2,2],[7,3],[3,2],[2,6],[2,2],[1,2],[0,2],[-3,5],[-1,7],[-2,13],[1,7],[3,12],[1,7],[-1,3],[-2,3],[-2,4],[0,3],[4,2],[3,-2],[5,-5],[2,2],[5,0],[4,0],[3,3],[-2,3],[2,4],[2,-1],[2,-4],[3,-2],[3,5],[1,-1],[3,-3],[0,7],[3,-2],[4,1],[1,2],[-3,3],[-2,-2],[-1,4],[0,4],[-2,3],[-4,0],[1,2],[1,2],[-1,2],[-2,0],[1,2],[1,1],[2,0],[3,0],[3,-1],[1,0],[-1,-1],[0,-1],[0,-1],[0,-2],[0,-1],[1,-1],[1,1],[1,1],[1,1],[1,1],[1,1],[3,-1],[4,6],[0,2],[1,1],[6,1],[2,2],[2,-4],[-1,-5]],[[5204,9035],[-1,-2],[-2,-1],[-1,-1],[-3,0],[0,2],[1,1],[1,0],[1,0],[1,1],[2,1],[1,-1]],[[5020,9071],[0,-2],[-2,0],[-2,0],[-2,-1],[-2,0],[1,2],[0,1],[1,1],[0,2],[1,1],[1,-2],[2,0],[2,-1],[0,-1]],[[5040,9073],[1,-1],[-2,-4],[-5,5],[0,-5],[-4,1],[1,-4],[1,-5],[-3,-5],[-1,-5],[-3,3],[1,3],[2,4],[-1,2],[-2,2],[-1,5],[2,8],[0,6],[-3,4],[-1,4],[-5,3],[5,-1],[4,-5],[3,-1],[3,-4],[4,-7],[1,-1],[1,-1],[2,-1]],[[3703,9143],[1,-3],[4,1],[5,-3],[2,-4],[-4,-1],[-3,-1],[-3,1],[-4,0],[0,8],[1,8],[1,-1],[0,-5]],[[3782,9252],[-2,-1],[-2,0],[0,1],[-1,1],[-1,1],[2,2],[2,1],[1,-1],[1,0],[1,-1],[0,-1],[0,-1],[-1,-1]],[[3789,9263],[-2,-1],[-2,3],[0,2],[5,1],[1,-2],[0,-2],[-1,0],[-1,-1]],[[5022,9355],[2,-1],[2,1],[1,0],[2,0],[0,-2],[1,-2],[-4,-2],[-5,0],[-1,1],[0,3],[1,1],[1,0],[0,1]],[[3924,9366],[-2,-2],[-6,2],[3,3],[4,0],[1,-3]],[[5176,9364],[-2,-2],[-1,1],[-1,2],[-3,4],[1,5],[4,2],[1,-2],[0,-4],[0,-4],[1,-2]],[[4219,9363],[-4,0],[-11,8],[1,3],[3,2],[4,1],[3,0],[5,-3],[1,-6],[-2,-5]],[[3941,9377],[-6,-2],[-3,0],[-3,1],[-2,1],[2,1],[1,1],[1,0],[1,0],[1,1],[3,0],[3,0],[2,0],[0,-3]],[[4764,9369],[-4,-2],[-4,1],[-2,3],[-3,5],[-2,8],[5,-3],[1,-1],[5,0],[3,-1],[1,-1],[2,-5],[-2,-4]],[[3927,9385],[-6,-6],[-7,2],[3,2],[4,2],[3,0],[3,0]],[[4777,9384],[-8,-3],[-3,1],[-3,2],[-2,1],[-1,3],[11,1],[2,-2],[4,-2],[0,-1]],[[5062,9390],[-7,-6],[-7,-2],[-4,-1],[-2,-2],[-2,-2],[-3,-2],[-4,0],[-4,1],[-3,2],[-1,2],[1,2],[0,2],[-1,3],[0,2],[3,-2],[2,-1],[2,-1],[2,2],[4,4],[2,2],[2,-1],[0,-1],[-1,-2],[0,-2],[1,-1],[2,0],[3,1],[2,0],[4,2],[4,7],[3,2],[5,-3],[-3,-5]],[[4799,9404],[-6,-1],[-3,2],[2,5],[6,0],[6,-1],[3,-1],[-4,-3],[-4,-1]],[[4988,9418],[-3,-5],[0,1],[0,1],[0,1],[-1,2],[1,1],[2,2],[3,2],[2,1],[1,2],[1,-2],[-3,-4],[-1,-1],[-1,0],[-1,-1]],[[5142,9429],[-6,-2],[0,1],[1,1],[2,0],[5,2],[-2,-2]],[[5099,9413],[-1,0],[0,1],[-1,2],[2,6],[0,6],[1,5],[5,4],[-1,-4],[-4,-11],[0,-2],[1,-2],[0,-1],[-1,-2],[-1,-2]],[[5016,9445],[-3,-3],[0,2],[1,1],[0,1],[1,2],[2,0],[2,0],[-1,-1],[-1,-1],[-1,-1]],[[5126,9442],[-2,-2],[-1,-3],[-5,1],[-7,-1],[-2,2],[2,3],[2,0],[4,0],[3,0],[3,2],[5,4],[3,3],[1,0],[-1,-2],[-1,-3],[-4,-4]],[[4814,9461],[1,-2],[1,0],[-2,-3],[-1,0],[0,1],[-1,2],[0,2],[2,0]],[[5177,9468],[1,-2],[-1,-1],[-1,0],[-1,-2],[-2,1],[0,1],[2,2],[2,1]],[[4998,9457],[-4,-2],[-7,2],[-1,5],[7,5],[9,5],[7,-2],[-8,-9],[-3,-4]],[[4256,9470],[3,0],[6,0],[5,1],[0,-1],[1,-4],[0,-3],[-2,-3],[-1,-2],[-1,-1],[-4,-2],[-6,-1],[-5,0],[-3,3],[-4,3],[-3,5],[-1,5],[5,3],[3,1],[2,-1],[3,-2],[2,-1]],[[4434,9467],[-3,-1],[-3,0],[-3,1],[2,2],[-2,5],[0,3],[3,1],[2,0],[6,4],[4,1],[6,1],[4,-1],[2,-3],[-2,-2],[-5,-1],[-9,-1],[-3,-1],[0,-2],[2,-2],[1,-2],[-2,-2]],[[4160,9475],[-3,-1],[-3,2],[0,2],[2,3],[0,2],[-1,1],[0,2],[2,1],[2,-2],[2,-4],[1,-4],[-2,-2]],[[4199,9481],[-1,-1],[-2,1],[-2,3],[1,2],[0,1],[2,0],[3,-3],[-1,-3]],[[5022,9490],[-1,-3],[-1,4],[1,2],[1,0],[0,-3]],[[5096,9497],[-12,-7],[-2,0],[-1,-1],[-3,-7],[-11,-5],[-2,-2],[-1,0],[-1,0],[-1,1],[-1,1],[-3,-2],[-2,-3],[-3,-3],[-6,-2],[0,2],[-8,-6],[-4,-2],[1,1],[0,1],[0,1],[2,6],[2,2],[3,1],[4,2],[2,3],[3,4],[2,4],[4,2],[1,-2],[3,-4],[4,-2],[2,2],[1,1],[7,10],[1,-1],[1,-1],[1,4],[3,2],[6,3],[7,5],[3,3],[2,3],[1,-5],[-1,-5],[-4,-4]],[[4458,9502],[-4,-1],[-4,0],[-3,1],[-4,0],[-3,-1],[-3,-3],[-3,-3],[-1,-2],[0,1],[0,1],[1,2],[0,3],[0,2],[0,2],[-1,1],[6,1],[4,2],[4,2],[3,2],[1,-3],[2,-3],[2,-2],[3,-2]],[[3781,9509],[0,-3],[0,-8],[3,-3],[10,-7],[4,-6],[0,-6],[0,-6],[-1,-6],[-2,-4],[0,-2],[2,1],[2,1],[1,1],[3,0],[3,0],[7,-2],[1,-2],[3,1],[5,-3],[10,-7],[3,-3],[0,-1],[0,-5],[-1,-3],[-3,-2],[-9,-4],[-11,0],[-6,-2],[-5,3],[-7,3],[-7,2],[-7,1],[-3,1],[-5,4],[-4,1],[-3,0],[-5,-3],[-10,-1],[-19,-8],[-6,-1],[-8,0],[-7,2],[-3,2],[-3,4],[-1,2],[-1,2],[2,3],[2,1],[4,-1],[4,1],[0,4],[-1,10],[1,5],[4,-1],[7,-4],[5,-1],[5,1],[4,4],[3,5],[-1,5],[-2,18],[2,3],[1,3],[0,3],[-1,3],[-2,1],[-2,1],[-3,0],[-3,-1],[5,9],[2,3],[3,2],[5,3],[2,3],[7,11],[2,2],[4,1],[5,0],[4,1],[3,3],[2,-5],[2,-6],[3,-6],[5,-9],[0,-2],[-3,-6]],[[3807,9551],[3,-4],[2,2],[2,2],[2,2],[3,0],[3,-1],[3,-3],[2,-3],[0,-3],[-1,-4],[-7,-6],[0,-4],[1,-3],[3,-1],[2,1],[2,2],[9,9],[4,3],[2,-3],[-3,-8],[1,-1],[2,-2],[6,-7],[0,-2],[6,11],[14,3],[13,2],[6,6],[3,5],[7,0],[7,-1],[3,-3],[2,-1],[6,-3],[1,-2],[2,-10],[1,-2],[2,3],[4,18],[3,2],[3,1],[5,3],[7,7],[4,2],[2,-4],[1,-5],[1,-5],[1,-4],[9,-14],[1,-1],[2,1],[0,5],[-3,7],[0,2],[0,5],[0,2],[-1,0],[-1,0],[-2,1],[0,1],[0,1],[1,2],[1,6],[2,5],[3,4],[4,3],[6,1],[3,-2],[3,-4],[0,-6],[-1,-1],[-1,-2],[-1,-3],[3,-2],[2,1],[2,3],[1,2],[1,2],[3,0],[1,-1],[2,-1],[2,-1],[3,1],[4,2],[3,0],[3,-2],[2,-3],[0,-4],[-1,-4],[5,-2],[1,-4],[0,-6],[2,-6],[1,-1],[1,-2],[1,2],[4,2],[3,0],[3,-2],[1,-2],[1,-3],[0,-8],[-1,-3],[-1,-3],[-2,-1],[-5,2],[-3,-1],[-3,-4],[-2,-7],[-1,-8],[3,-5],[0,1],[1,-5],[-4,-1],[-5,0],[-3,1],[0,1],[-5,3],[-2,1],[-2,-1],[-11,-21],[-5,-5],[-2,-5],[-3,-1],[-3,0],[-2,0],[-6,-3],[-3,-3],[-2,-2],[-1,-2],[-22,-12],[-26,-21],[-4,-2],[-4,1],[-5,7],[-6,4],[-7,4],[-11,4],[-11,6],[-1,1],[-4,1],[-5,2],[-5,2],[-3,3],[0,1],[1,1],[0,1],[-1,0],[-2,1],[-1,0],[-11,9],[-6,4],[-2,2],[-2,4],[-1,1],[-5,1],[-5,1],[-4,2],[-1,4],[-1,15],[-1,4],[-1,1],[-2,1],[-1,1],[-5,7],[-2,3],[-5,24],[0,4],[-1,1],[-1,1],[-1,1],[0,2],[0,2],[0,2],[1,2],[2,2],[-6,6],[-2,4],[-1,4],[0,6],[1,5],[3,3],[3,4],[8,-11],[15,-17]],[[4328,9577],[1,-1],[-1,-2],[0,1],[-1,1],[-2,0],[-5,-2],[0,1],[-2,3],[-2,1],[4,1],[3,0],[2,0],[2,1],[1,-3],[0,-1]],[[5430,8395],[0,-3],[0,-65],[0,-65],[0,-65],[0,-64],[0,-65],[0,-65],[0,-65],[0,-65],[0,-65],[0,-65],[0,-64],[0,-65],[0,-65],[0,-65],[0,-65],[0,-65],[0,-64],[0,-65],[0,-65],[0,-65],[0,-65],[0,-65],[0,-65],[0,-64],[0,-65],[0,-65],[0,-65],[0,-65],[0,-65],[0,-65],[0,-64],[0,-65]],[[5430,6317],[-61,0],[-61,0],[-61,0],[-61,0],[-61,0],[-61,0],[-60,0],[-61,0],[-61,0],[-61,0],[-61,0],[-61,0],[-61,0],[-61,0],[-61,0],[-60,0],[-61,0],[-61,0],[-10,0],[-51,0],[-61,0],[-61,0],[-61,0],[-61,0],[-61,0],[-60,0],[-61,0],[-61,0],[-61,0],[-61,0],[-61,0],[-61,0],[-61,0]],[[3481,6317],[0,76],[0,77],[0,76],[0,76],[0,77],[0,76],[0,77],[0,76],[0,76],[0,77],[0,76],[0,77],[0,76],[0,76],[0,77],[0,76],[0,77],[0,76],[0,77],[0,76],[0,76],[0,77],[0,76],[0,77],[0,76],[0,76],[0,77],[0,76],[0,77],[0,76],[0,76],[0,77]],[[3481,8762],[2,0],[9,-2],[9,-4],[2,-2],[2,-2],[1,-2],[1,-3],[0,-2],[2,0],[6,-1],[4,-3],[2,-3],[1,-5],[-1,-4],[-1,-4],[-1,-4],[2,-4],[3,-5],[0,-4],[-1,-4],[-5,-9],[-4,-11],[5,1],[6,12],[4,-1],[-2,-3],[-1,-4],[0,-4],[2,-4],[6,28],[4,1],[0,4],[-1,13],[-1,3],[-2,2],[-1,5],[-1,11],[-2,15],[-1,5],[2,1],[3,-1],[3,-4],[1,-6],[2,0],[4,6],[8,0],[7,-4],[3,-6],[22,-6],[5,-4],[0,-1],[3,-11],[3,-2],[6,-3],[2,-2],[2,-3],[3,-8],[2,-3],[1,-3],[-3,-8],[0,-4],[10,7],[3,1],[4,-1],[1,-2],[0,-6],[1,-4],[1,-1],[4,1],[4,0],[3,0],[1,2],[-1,3],[-1,3],[-14,15],[-2,3],[-4,12],[-3,14],[-1,3],[1,2],[4,6],[1,3],[1,12],[1,1],[3,0],[6,-4],[3,0],[6,0],[8,-2],[3,0],[4,0],[5,2],[5,2],[1,1],[3,0],[1,1],[0,1],[1,1],[9,8],[2,0],[2,1],[4,-1],[6,-4],[-1,6],[3,12],[-2,3],[-2,-6],[-4,-4],[-13,-3],[-21,-10],[-8,-1],[8,10],[0,2],[-2,0],[-7,-4],[-4,-1],[-3,0],[-3,1],[-9,7],[-1,3],[2,3],[-5,3],[-5,4],[-4,5],[-4,9],[0,3],[1,2],[3,0],[8,1],[10,0],[6,1],[2,5],[2,1],[9,6],[2,2],[-4,0],[-6,-1],[-5,-3],[-7,-5],[-4,0],[-9,2],[-2,0],[-5,0],[-2,0],[-1,0],[-1,1],[-2,1],[-3,1],[-4,1],[-13,11],[-1,0],[-2,0],[-1,0],[-1,1],[-1,3],[-1,1],[-3,1],[-1,1],[-1,3],[-1,1],[-10,6],[-2,2],[3,18],[1,1],[6,6],[1,3],[0,2],[0,3],[1,2],[1,4],[2,3],[10,9],[2,4],[2,3],[1,5],[0,8],[-1,2],[-2,4],[0,2],[1,1],[3,-2],[3,-1],[3,2],[1,-2],[0,-3],[1,-2],[2,-1],[2,1],[3,2],[2,-1],[1,-3],[4,6],[-1,6],[-1,6],[2,3],[1,-7],[5,-2],[13,3],[6,2],[4,5],[2,7],[0,6],[0,4],[-3,2],[-2,2],[-2,3],[0,3],[2,4],[4,5],[12,9],[4,6],[-3,4],[0,-2],[-2,-2],[-1,-1],[-1,1],[1,4],[0,3],[-1,8],[0,3],[6,14],[3,7],[1,3],[0,7],[1,3],[1,3],[2,1],[2,1],[2,1],[2,6],[1,4],[2,3],[2,0],[2,-2],[0,-4],[0,-8],[1,-2],[4,-2],[8,-3],[3,2],[13,4],[4,3],[11,9],[5,-2],[6,6],[11,16],[5,5],[4,3],[4,1],[4,-2],[5,-4],[4,0],[-2,6],[-2,2],[-4,3],[-5,2],[-5,0],[-2,2],[-2,3],[-4,6],[-11,14],[-2,1],[-5,0],[-2,1],[-1,2],[1,24],[0,3],[2,2],[1,5],[-1,7],[0,6],[4,4],[2,0],[2,1],[2,1],[1,3],[3,-3],[0,-3],[2,-2],[4,-1],[5,1],[8,4],[4,1],[4,2],[3,4],[3,5],[1,5],[0,13],[2,7],[-1,4],[-2,4],[-1,4],[2,5],[3,0],[4,-2],[3,0],[1,1],[0,3],[0,2],[2,1],[2,1],[3,3],[3,1],[3,-1],[8,-4],[4,-1],[-4,5],[-1,3],[0,3],[2,2],[3,-2],[9,-17],[2,-1],[2,-1],[2,-1],[0,-3],[2,1],[2,-1],[2,-1],[2,0],[1,1],[1,1],[2,0],[1,0],[2,-1],[2,0],[2,0],[2,0],[2,2],[0,2],[-18,5],[1,-1],[-1,0],[-1,-1],[-2,0],[0,1],[-1,2],[-1,0],[0,1],[-3,4],[-1,1],[0,1],[-2,1],[2,2],[2,0],[2,-1],[2,0],[2,1],[2,2],[0,1],[0,1],[-1,2],[-1,1],[-5,0],[-1,1],[0,3],[6,14],[0,4],[-3,5],[0,2],[2,2],[4,2],[-1,2],[-4,3],[-1,0],[-3,1],[0,2],[6,3],[8,0],[7,-2],[4,-4],[4,0],[6,-1],[6,-2],[3,-2],[-2,-4],[0,-3],[2,-8],[1,-13],[1,-5],[1,3],[0,3],[1,3],[2,2],[7,-5],[8,-13],[5,-5],[-1,4],[0,1],[-1,1],[4,3],[4,-1],[8,-5],[-2,6],[-5,4],[-6,4],[-4,4],[-3,4],[0,3],[1,1],[5,0],[4,-1],[7,-4],[3,-1],[-1,3],[-2,3],[-5,5],[-1,0],[-5,1],[-1,2],[-1,2],[-2,2],[-4,2],[-2,-2],[-3,-1],[-4,2],[0,2],[1,2],[1,3],[-2,4],[8,1],[-3,3],[2,3],[7,3],[1,2],[1,1],[0,1],[2,1],[2,0],[1,-1],[1,-1],[2,-1],[20,-4],[5,-2],[0,4],[-1,3],[-3,5],[-1,3],[1,11],[-1,4],[-5,6],[-2,4],[1,4],[3,3],[3,2],[4,1],[2,-1],[4,-3],[1,-1],[2,1],[2,3],[2,1],[2,-2],[3,-4],[2,-2],[5,1],[6,-5],[4,-2],[2,-2],[1,-2],[3,-3],[5,1],[-4,5],[-1,2],[1,2],[3,4],[1,1],[0,5],[1,3],[2,8],[0,7],[1,2],[2,2],[2,1],[2,-1],[1,-5],[2,-3],[0,-2],[0,-10],[2,-10],[4,-8],[6,-6],[7,-5],[5,-2],[4,-2],[5,-1],[5,-1],[5,1],[9,2],[5,0],[2,0],[5,-3],[2,1],[18,3],[17,2],[8,3],[4,2],[5,5],[3,1],[2,1],[2,0],[2,-1],[1,-2],[0,-2],[1,-2],[4,-3],[10,-3],[5,-4],[5,-1],[5,-2],[2,0],[5,2],[8,5],[7,7],[4,4],[1,1],[10,3],[1,2],[2,6],[1,2],[3,1],[3,-2],[1,-3],[0,-4],[2,-6],[4,0],[5,3],[6,2],[3,0],[2,-1],[2,-2],[7,-12],[1,-5],[1,-1],[0,-1],[0,-2],[-1,-1],[-3,-2],[-1,-1],[-2,-2],[0,-1],[-1,-2],[1,-6],[3,5],[6,6],[4,7],[-6,15],[1,9],[3,8],[6,3],[5,1],[12,8],[4,2],[3,-1],[6,-4],[8,-3],[8,-2],[8,-1],[9,1],[-3,1],[-4,0],[-2,1],[-2,1],[-2,2],[-2,1],[-9,5],[-3,4],[-1,5],[-1,9],[6,30],[0,4],[-1,3],[-2,3],[-8,6],[-2,2],[2,4],[8,9],[3,4],[3,7],[2,2],[4,1],[0,2],[-10,4],[-8,1],[-3,2],[-4,2],[-3,3],[-3,3],[0,2],[1,1],[1,4],[-2,2],[-3,1],[-3,2],[2,4],[-5,1],[-3,7],[-13,6],[-4,2],[-10,1],[-5,-1],[-8,-5],[-5,0],[-5,1],[-5,0],[-2,0],[-1,-1],[-2,-1],[-2,-2],[-2,-2],[-1,-1],[-1,0],[-2,1],[-1,0],[-1,0],[-6,-6],[-4,-2],[-4,-1],[-5,2],[-3,2],[-2,3],[-3,1],[-1,1],[-1,2],[-1,3],[-1,2],[1,1],[3,0],[2,1],[0,2],[-3,3],[-6,-1],[-5,0],[-2,6],[-1,0],[-3,-2],[-2,1],[-2,2],[1,3],[4,1],[2,2],[0,3],[-3,2],[-5,-2],[-3,0],[-1,2],[1,3],[0,2],[-3,1],[-4,0],[-5,2],[-3,1],[-2,-1],[-5,-2],[-2,0],[-11,1],[0,1],[2,2],[3,1],[3,1],[-3,5],[3,0],[4,-2],[4,-1],[2,3],[-2,5],[-3,4],[-1,5],[1,0],[5,-1],[2,-1],[2,-2],[2,1],[0,2],[0,1],[-1,2],[1,3],[1,2],[1,-2],[1,-1],[3,-4],[7,-10],[1,-1],[1,0],[4,2],[4,4],[0,3],[-2,5],[-1,5],[4,-2],[1,1],[-2,5],[0,4],[1,0],[2,-1],[4,-1],[2,-2],[2,-4],[2,-3],[8,-3],[-1,-6],[2,-2],[3,1],[2,2],[2,1],[1,-2],[-1,-2],[-2,-4],[0,-1],[0,-2],[1,-3],[0,-3],[-1,-6],[0,-4],[2,-1],[1,0],[1,-1],[2,1],[0,2],[-1,1],[0,2],[2,3],[3,-5],[-1,-7],[1,-6],[5,-5],[6,-1],[0,4],[-3,6],[0,3],[3,1],[3,-2],[2,-2],[2,3],[0,3],[-2,2],[-4,4],[-1,1],[-1,-1],[-1,0],[-1,2],[0,1],[1,2],[0,1],[0,3],[0,3],[-1,3],[-2,3],[2,3],[-2,4],[-3,5],[-2,2],[-2,2],[0,4],[3,3],[6,-2],[2,-3],[1,-4],[3,-3],[3,-2],[2,-2],[3,-9],[2,-4],[4,-3],[1,3],[-2,8],[-1,9],[1,4],[4,2],[3,-1],[1,-1],[1,0],[3,2],[0,1],[1,3],[1,3],[1,-2],[1,-4],[7,-15],[0,-1],[0,-1],[-1,-1],[2,-4],[-2,-8],[2,-1],[3,1],[2,4],[2,8],[5,4],[7,-5],[5,-9],[4,-8],[-1,-2],[0,-2],[1,-2],[1,0],[1,0],[2,1],[0,1],[1,-1],[3,-3],[1,-2],[2,-4],[10,-7],[4,-7],[3,-8],[6,-7],[9,-2],[4,2],[5,3],[4,5],[2,6],[2,1],[2,0],[2,1],[3,3],[1,1],[0,1],[0,2],[0,1],[5,-1],[5,-2],[3,-2],[2,5],[-1,6],[-1,3],[-5,4],[1,2],[1,1],[2,-1],[5,-1],[1,0],[0,-1],[1,-1],[2,-1],[1,-1],[1,0],[1,-2],[3,-6],[1,-1],[5,-2],[6,-7],[4,-7],[3,-6],[1,0],[2,-2],[2,0],[2,-2],[0,-2],[-1,-6],[0,-3],[6,-8],[9,-17],[2,-3],[3,-3],[4,-3],[5,-1],[12,-2],[4,2],[2,7],[4,-1],[6,1],[2,0],[4,-2],[-1,-1],[-4,-2],[-2,-2],[-3,-3],[0,-3],[1,-3],[5,0],[4,0],[2,0],[1,2],[2,4],[2,2],[2,0],[2,-1],[2,-3],[-1,-1],[-2,-1],[-1,-2],[0,-1],[1,-1],[2,0],[4,0],[6,-3],[3,-1],[1,2],[2,1],[3,1],[4,2],[1,3],[3,-4],[0,-7],[-2,-8],[-2,-5],[1,-2],[2,3],[2,6],[2,3],[6,3],[1,0],[2,-1],[1,-1],[0,-2],[1,-1],[1,-2],[2,-1],[3,2],[4,1],[2,0],[1,3],[3,8],[4,-1],[3,0],[4,0],[4,1],[3,3],[8,9],[6,0],[2,0],[1,-1],[0,-1],[1,-1],[4,-1],[4,-1],[3,0],[3,4],[4,-5],[2,-3],[-2,-1],[-3,-1],[-2,-2],[-2,-2],[-1,-3],[-5,1],[-6,-3],[-2,-5],[2,-6],[10,-7],[11,-5],[9,5],[5,2],[2,2],[1,3],[1,3],[3,0],[4,0],[3,-2],[1,-4],[0,-1],[1,0],[1,-1],[1,-2],[-1,-3],[0,-2],[0,-1],[1,-3],[9,10],[2,1],[1,-2],[3,-7],[1,-2],[1,-2],[3,-1],[3,-1],[0,-3],[-1,0],[-3,-1],[-2,0],[0,-2],[1,-2],[1,-1],[1,-2],[1,-2],[1,-2],[0,-5],[0,-2],[-1,-2],[-1,-2],[1,-2],[1,-1],[2,1],[2,5],[8,6],[3,2],[0,4],[0,3],[1,2],[4,2],[14,-12],[7,-5],[11,-3],[20,-2],[8,3],[5,0],[2,-3],[3,4],[6,4],[14,14],[1,1],[4,2],[6,1],[4,0],[1,-1],[0,-2],[0,-5],[0,-2],[2,-2],[2,-3],[1,-2],[1,-3],[1,-1],[2,0],[3,1],[2,0],[1,-2],[1,-9],[1,-5],[2,-3],[4,-2],[10,0],[3,0],[2,-1],[4,-1],[1,-1],[1,-2],[3,-5],[2,-5],[1,-1],[8,-4],[1,-2],[1,0],[4,-5],[3,-1],[2,0],[5,3],[4,1],[3,0],[2,-2],[3,-4],[4,-2],[3,-3],[3,-1],[5,2],[-2,3],[-9,5],[-4,6],[8,-1],[6,1],[5,1],[2,-3],[3,-3],[5,-2],[4,2],[3,1],[3,2],[0,2],[-5,-2],[-5,1],[-3,1],[-6,4],[-5,0],[-4,4],[4,2],[6,0],[9,5],[1,1],[2,2],[0,1],[-3,1],[-1,1],[5,4],[5,2],[4,3],[4,0],[6,1],[1,-1],[-2,-4],[4,-2],[7,1],[5,1],[5,2],[2,4],[0,3],[4,1],[0,-4],[8,-4],[3,0],[8,7],[1,0],[5,3],[1,1],[12,7],[-2,2],[-11,-3],[-3,-1],[-9,-7],[-3,0],[-2,3],[-1,4],[1,7],[4,6],[2,2],[5,1],[1,-1],[1,-1],[1,-1],[2,0],[2,0],[1,1],[1,2],[1,1],[3,2],[4,1],[4,1],[4,-3],[8,5],[8,7],[5,3],[1,1],[1,3],[2,1],[3,1],[2,1],[2,4],[-1,4],[-2,4],[-1,5],[2,2],[5,0],[5,-2],[3,-2],[-3,-9],[-4,-7],[-14,-14],[-6,-9],[-4,-2],[-8,-2],[-1,-1],[-1,-2],[-7,-4],[2,-2],[9,3],[4,2],[14,1],[4,1],[6,4],[5,0],[0,-1],[-3,-2],[-11,-3],[-5,-4],[-8,-6],[-6,-8],[-8,-7],[-2,-1],[-6,-5],[-5,-4],[-4,-4],[0,-8],[4,-7],[4,-3],[4,-4],[2,-2],[4,-8],[4,9],[3,3],[3,-1],[1,0],[2,6],[3,4],[9,6],[7,8],[2,2],[1,-1],[2,-2],[1,-3],[0,-1],[1,-1],[1,1],[3,4],[1,2],[2,1],[2,-1],[3,1],[13,14],[5,3],[-1,-4],[-3,-4],[-3,-4],[-2,-1],[-1,-1],[-3,-3],[0,-1],[-1,-3],[-1,-1],[-6,-4],[-3,-2],[-1,-2],[0,-2],[1,-2],[1,-1],[1,-2],[1,-5],[4,-1],[5,1],[3,2],[3,2],[4,2],[4,0],[1,-5],[-1,-2],[-2,-2],[-2,0],[-1,-1],[0,-1],[-3,-7],[-7,-9],[-2,-2],[1,-2],[0,-3],[1,-2],[2,1],[3,1],[0,-2],[-1,-4],[1,-5],[2,-4],[2,-3],[4,2],[0,2],[1,2],[0,2],[3,1],[1,-1],[1,-1],[0,-1],[1,-1],[1,-1],[2,1],[1,0],[8,2],[2,0],[2,-1],[2,-4],[1,-1],[5,1],[5,1],[7,3],[7,5],[5,7],[6,18],[6,10],[1,4],[-1,4],[-3,2],[-3,2],[-4,0],[-3,0],[-5,-1],[-4,0],[-5,-1],[-3,4],[-2,1],[-6,-1],[-1,1],[-1,4],[1,2],[3,1],[6,1],[2,5],[11,14],[4,4],[4,0],[2,-1],[2,1],[5,5],[5,4],[7,7],[3,2],[2,1],[2,4],[3,0],[4,-2],[7,3],[3,4],[5,1],[3,2],[0,3],[2,-1],[2,-2],[-1,-2],[-3,-2],[-4,-3],[-4,-2],[-3,-1],[-3,-1],[-4,0],[-3,-2],[1,-4],[1,-4],[3,-1],[3,3],[3,1],[3,-1],[3,-10],[3,-9],[6,-1],[-1,-6],[0,-8],[2,-6],[4,-4],[2,-3],[6,-6],[2,-5],[1,-1],[6,-4],[6,0],[6,3],[5,5],[-2,2],[-1,2],[-6,1],[-3,3],[-3,4],[-4,-3],[1,4],[6,0],[4,3],[6,2],[5,-2],[6,-5],[3,-4],[6,0],[5,-2],[7,-9],[4,-6],[2,-7],[-1,-6],[4,-2],[5,3],[3,0],[-3,-5],[-2,-1],[-1,-1],[-2,0],[-4,0],[-5,-3],[-10,-10],[-14,-18],[-3,-4],[-2,-1],[-1,3],[3,4],[4,6],[0,1],[1,2],[0,2],[-1,2],[-2,1],[-2,-1],[-2,-2],[-1,-1],[-6,-3],[-1,-7],[2,-9],[4,-6],[-5,1],[-2,-1],[-6,-9],[-5,-12],[4,-6],[-2,-3],[-4,2],[-9,0],[-5,-2],[-1,-5],[2,-3],[2,-3],[0,-5],[0,-2],[1,-3],[-1,-2],[-2,-3],[-3,0],[-2,2],[-1,3],[-1,4],[-2,6],[0,2],[-1,1],[-1,1],[-2,0],[-2,0],[-2,-1],[-1,-1],[0,-3],[1,-3],[0,-3],[0,-2],[-4,0],[-4,5],[-4,3],[-1,-1],[0,-4],[2,-8],[1,-3],[1,-2],[8,-7],[4,2],[0,-4],[0,-5],[2,0],[3,0],[9,-6],[6,-3],[0,-5],[4,-4],[0,-3],[-1,-1],[-2,1],[-2,2],[-1,1],[-2,1],[0,2],[-1,0],[-3,0],[-4,-7],[-4,0],[0,7],[-2,4],[-3,0],[-2,-2],[0,-1],[-1,0],[-2,2],[-1,0],[-4,-2],[0,-1],[-1,-3],[1,-1],[1,-2],[1,-1],[1,-1],[3,0],[0,-1],[0,-2],[2,-4],[8,-2],[-7,-10],[-1,-11],[-4,2],[-5,-1],[-2,-4],[-1,-5],[0,-8],[-1,-3],[-3,-2],[0,2],[-1,2],[-1,3],[-1,0],[-2,-2],[-8,-3],[-2,-5],[-5,-7],[-3,-3],[-2,-3],[-3,1],[1,2],[-3,0],[0,3],[5,3],[0,3],[-2,2],[1,2],[3,0],[3,-1],[3,2],[2,4],[-2,3],[-3,4],[1,7],[-1,3],[0,12],[1,7],[-1,2],[-5,2],[-2,0],[-3,-4],[-2,-3],[-1,-3],[0,-3],[3,-4],[-2,-3],[0,-4],[-1,-2],[-4,0],[-3,1],[-3,7],[-2,-1],[-3,-2],[-1,-2],[1,-4],[2,-3],[0,-3],[-3,-3],[-2,1],[-1,0],[-1,-2],[-1,-2],[0,1],[0,-3],[-3,-1],[-4,0],[-4,-6],[-2,5],[-2,7],[4,8],[0,6],[-2,5],[-3,-1],[-7,-7],[-4,-9],[0,-7],[-2,0],[-2,2],[-2,0],[-1,-2],[0,-3],[1,-10],[-1,-5],[-1,0],[-2,6],[0,6],[-2,5],[-5,5],[-3,-1],[-3,-3],[-2,-10],[-3,-2],[-1,5],[-2,2],[-4,-3],[-3,-4],[0,-4],[-6,-5],[0,-9],[7,-1],[2,-1],[1,-2],[0,-3],[-2,-1],[1,-2],[3,-1],[5,1],[1,0],[1,-3],[0,-2],[-1,-3],[-4,1],[-2,-1],[-4,-3],[-4,6],[-4,1],[-4,-1],[-2,-4],[2,-6],[0,-5],[1,-8],[0,-2],[-1,-2],[-1,0],[-2,-2],[0,-2],[-1,-5],[2,-3],[4,-9],[3,-3],[7,3],[0,-1],[1,-2],[0,-1],[-6,-3],[-2,-6],[3,-5],[8,-3],[7,2],[6,4],[8,11],[1,2],[-1,1],[1,1],[2,2],[2,0],[1,0],[2,-1],[1,-1],[1,-2],[-2,-2],[-4,-3],[-1,-3],[-3,-11],[-6,-10],[1,-3],[0,-3],[-1,-5],[-1,-1],[-1,-1],[-1,-1],[0,-2],[0,-6],[0,-1],[-6,-8],[-9,-5],[-4,-39],[1,-13],[-4,2],[-5,-1],[-3,-2],[-1,-3],[-2,-1],[-5,-1],[-1,-1],[-1,0],[-4,-3],[-1,0],[-5,-5],[-6,-7],[-13,-24],[-1,-5],[-4,-2],[-6,1],[-3,-4],[-12,-21],[-5,-7],[-3,-8],[1,-8],[-4,-2],[-5,-2],[-6,-3],[-2,-4],[-1,-2],[-1,-2],[-4,-1],[-2,1],[-3,2],[-3,0],[-2,-3],[3,0],[2,-3],[1,-9],[2,-8],[9,-22],[5,-7],[18,-16],[6,-3],[7,-3],[3,1],[4,1],[2,-1],[3,-5],[6,-5],[3,-2],[2,-4],[4,1],[5,-1],[4,-2],[1,-3],[3,-2],[14,-6],[5,-5],[7,-8],[7,-7],[8,-3],[3,0],[9,-5],[4,-2],[6,-6],[3,-2],[2,-1],[5,-1],[7,-5],[8,-4],[4,-2],[3,-3],[1,-1],[3,-10],[3,-16],[1,-3],[2,-3],[10,-7],[4,-2],[10,-1],[5,-1],[11,-12],[6,-3],[3,-3],[4,-3],[6,-2],[2,1],[2,2],[2,1],[2,-1],[1,-1],[2,-6],[1,-2],[10,-8],[3,-2],[7,-11],[3,-1],[1,-2],[-1,-4],[-2,-4],[-1,-4],[3,-4],[4,-1],[3,3],[2,3],[2,3],[4,0],[9,-2],[7,0],[2,0],[2,-1],[4,-4],[2,-1],[4,0],[0,1],[-1,3],[2,5],[3,2],[9,4],[1,1],[4,-6],[8,-7],[10,-5],[9,-3],[4,-3],[2,-1],[4,-1],[2,0],[2,-1],[11,-8],[2,-2],[2,-2],[5,-7],[15,-11],[4,-1],[5,0],[3,-1],[1,-2],[0,-2],[3,0],[2,0],[2,0],[5,-5],[2,-1],[3,0],[5,1],[2,1],[4,-1],[24,-9],[7,-4],[8,-3],[4,-2],[7,-11],[1,-3],[13,-18],[1,-3],[4,-5],[10,-9],[8,-7],[11,-7]],[[4348,9593],[-2,-1],[-2,3],[0,3],[-2,3],[3,-2],[3,-1],[1,0],[1,-2],[-1,-1],[-1,-2]],[[5162,9608],[0,-4],[-4,-12],[-2,-10],[-3,-8],[-1,-7],[-2,-1],[-1,0],[-5,-3],[-3,-7],[-6,-7],[-3,-9],[-3,-1],[-5,-10],[-10,-11],[-1,-3],[-3,-1],[0,2],[-2,1],[-1,-1],[-3,-4],[-4,2],[4,3],[1,3],[-4,2],[3,3],[7,5],[7,4],[1,2],[3,4],[0,6],[1,4],[7,10],[8,11],[8,2],[2,9],[2,4],[1,5],[2,2],[2,2],[1,3],[-4,3],[5,5],[0,-1],[1,0],[1,0],[1,-1],[0,2],[2,2]],[[4310,9619],[0,-1],[-1,-2],[0,-2],[0,-2],[-1,2],[0,2],[-1,1],[0,1],[2,0],[1,1]],[[4258,9604],[2,-6],[-1,0],[2,-2],[1,-2],[1,-3],[1,-3],[-1,-3],[-2,0],[-2,0],[-1,-2],[-1,-4],[3,-2],[5,0],[3,-3],[-5,-2],[0,-3],[2,-4],[2,-7],[-2,-5],[-4,-10],[-1,-6],[-7,7],[-1,8],[-2,6],[-4,6],[-9,12],[0,1],[1,2],[1,1],[2,1],[2,1],[0,2],[-2,9],[0,2],[-3,1],[-2,2],[-1,3],[-2,3],[-1,2],[3,-1],[4,-1],[2,-2],[2,1],[3,1],[4,1],[2,3],[0,4],[1,4],[3,3],[4,0],[0,-3],[-3,-4],[-1,-2],[1,-3],[1,-3]],[[2019,4523],[-2,0],[-1,1],[1,2],[0,4],[-1,2],[2,2],[3,-1],[1,-1],[-2,-3],[0,-3],[-1,-3]],[[597,4951],[1,-5],[-4,1],[-1,0],[0,5],[-2,6],[0,5],[2,3],[1,-6],[3,-9]],[[570,4997],[-4,-3],[-4,-1],[-5,1],[-7,-1],[-4,1],[4,2],[5,0],[2,3],[7,1],[4,-2],[2,-1]],[[168,5771],[-2,-1],[-1,4],[0,4],[5,1],[1,2],[2,2],[4,0],[3,0],[-4,-3],[-4,-4],[-3,-2],[-1,-3]],[[9,6430],[2,-2],[3,0],[3,1],[2,-2],[0,-1],[0,-6],[0,-5],[3,-8],[5,-9],[1,-11],[1,-8],[4,-7],[4,-10],[6,-12],[4,-8],[-5,-12],[0,-5],[7,-1],[-1,1],[-1,2],[-1,1],[3,1],[2,-3],[2,-4],[3,-4],[1,-1],[3,-4],[1,-2],[2,-2],[0,-5],[1,-2],[2,-4],[0,-5],[-1,-5],[-3,-2],[-2,1],[-4,2],[-2,7],[-3,9],[-4,4],[-2,3],[-10,12],[-8,6],[-7,21],[-10,11],[-3,5],[2,2],[1,2],[-2,12],[-8,15],[0,12],[1,4],[-1,7],[3,4],[3,3],[3,2]],[[32,6476],[-1,0],[-1,2],[-1,1],[0,5],[5,15],[1,7],[0,17],[2,7],[6,4],[-2,-7],[0,-4],[1,-2],[-2,-2],[0,-5],[0,-8],[-1,-4],[-4,-7],[-1,-4],[0,-8],[0,-4],[-2,-3]],[[44,6542],[-1,-5],[0,3],[0,1],[-1,2],[-1,2],[5,35],[4,10],[2,-4],[0,-6],[-5,-20],[0,-5],[3,-3],[-5,-6],[-1,-4]],[[540,7451],[-1,-4],[-3,-2],[-7,-3],[-1,3],[-2,2],[-3,1],[-1,0],[-1,-3],[-2,-2],[-2,1],[-2,3],[1,3],[2,9],[4,6],[15,18],[6,5],[5,0],[1,-3],[0,-7],[2,-3],[1,-4],[-1,-4],[-5,-7],[0,-1],[0,-2],[-1,-2],[-1,-1],[-1,0],[-3,-3]],[[788,7508],[0,-5],[-1,-4],[-5,0],[-8,0],[-4,1],[-2,2],[3,4],[8,1],[1,-3],[3,0],[0,3],[3,3],[2,-2]],[[2295,8376],[-1,-2],[-2,-1],[-4,0],[-2,2],[-2,0],[-1,1],[-2,1],[1,1],[3,0],[2,0],[4,-2],[1,1],[1,2],[1,1],[2,-1],[0,-1],[-1,-2]],[[2266,8383],[-1,-1],[-1,0],[-4,4],[-2,5],[-1,4],[1,2],[1,0],[0,-1],[0,-1],[2,-4],[4,-3],[1,-2],[0,-3]],[[2257,8416],[-1,1],[1,1],[-1,1],[1,1],[-1,1],[2,1],[1,0],[0,-1],[0,-1],[0,-1],[1,0],[-1,-1],[-1,-1],[-1,-1]],[[2210,8419],[0,-1],[-2,0],[-2,0],[-2,1],[-1,0],[-2,1],[1,1],[1,0],[0,1],[1,1],[1,-1],[1,-1],[0,-1],[1,0],[1,-1],[2,0]],[[2229,8422],[-1,-1],[-1,0],[-1,0],[-1,0],[0,1],[1,2],[1,1],[1,1],[1,2],[1,-1],[0,-2],[0,-1],[-1,-1],[0,-1]],[[2224,8422],[-1,-3],[-2,0],[-1,0],[-1,0],[-1,1],[-2,0],[-1,0],[2,1],[2,2],[1,2],[0,2],[-2,1],[1,1],[1,0],[2,0],[2,-1],[2,0],[1,0],[0,-1],[-1,-2],[-1,-2],[-1,-1]],[[2450,8430],[1,0],[0,1],[1,0],[1,-1],[1,0],[0,-1],[-1,-2],[-4,1],[-3,3],[0,3],[-1,1],[0,1],[1,1],[0,1],[1,-1],[0,-2],[0,-1],[1,0],[1,-1],[0,-1],[1,0],[0,-1],[0,-1]],[[2259,8436],[1,-2],[-1,0],[-1,1],[-1,0],[-1,0],[-1,0],[-1,3],[1,2],[1,1],[0,-1],[1,0],[1,-1],[0,-1],[1,-2]],[[2318,8436],[-1,0],[-1,1],[-1,0],[-2,2],[-1,2],[0,1],[1,0],[3,-2],[1,-1],[1,-1],[0,-2]],[[2299,8456],[-1,-2],[-1,-1],[-1,0],[0,1],[-1,0],[-1,1],[0,1],[-1,0],[-1,1],[1,0],[2,-1],[2,0],[1,1],[1,0],[0,1],[0,-2]],[[2373,8462],[9,-6],[3,-3],[0,-1],[-3,0],[-3,1],[-1,0],[0,1],[0,1],[-1,1],[-1,1],[-5,2],[-2,2],[0,1],[2,-1],[1,-1],[0,1],[0,1],[1,0]],[[2424,8462],[0,-1],[1,1],[1,-1],[2,-1],[2,-1],[-4,-1],[-3,1],[-2,-2],[0,1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[2,0],[0,1],[-1,1],[1,0],[1,0],[0,-1]],[[2290,8460],[7,-2],[-1,0],[-5,0],[-2,0],[1,-3],[2,-1],[-2,-2],[0,-1],[-1,0],[-2,1],[0,1],[0,1],[-2,5],[0,1],[-1,2],[-2,0],[-3,2],[0,1],[1,1],[0,1],[1,1],[2,-1],[2,0],[2,-2],[0,-1],[2,-3],[1,-1]],[[2254,8481],[0,-1],[1,0],[2,1],[1,-2],[-1,0],[1,-1],[-1,-1],[0,-1],[-2,1],[-1,1],[-1,1],[-1,0],[0,1],[0,1],[1,0],[1,0]],[[2294,8478],[-1,0],[-2,1],[1,3],[1,0],[1,0],[1,0],[1,-1],[0,-2],[-1,-1],[-1,0]],[[2413,8484],[2,-1],[0,1],[2,-2],[1,-1],[0,-2],[1,-1],[-1,-1],[-2,0],[-2,1],[-1,1],[-1,1],[-1,1],[1,0],[0,1],[0,1],[0,1],[0,1],[1,0],[0,-1]],[[2269,8488],[2,-1],[1,-1],[1,0],[0,-2],[-2,0],[0,1],[-1,1],[0,-1],[-1,0],[-1,-1],[-1,1],[-1,1],[1,0],[0,2],[1,0],[0,1],[-1,1],[1,0],[1,-1],[0,-1]],[[2340,8489],[1,-1],[1,1],[7,-2],[1,1],[1,1],[2,-1],[-1,-1],[0,-2],[2,-2],[0,-1],[-2,-1],[1,-1],[-1,-1],[-2,2],[-2,0],[0,-1],[1,-1],[-2,1],[-7,5],[-6,3],[-3,0],[-1,1],[1,1],[6,0],[2,0],[1,-1]],[[2419,8491],[0,-3],[-1,0],[0,1],[0,1],[-1,0],[-2,-2],[-1,0],[-1,-1],[-1,0],[0,2],[1,1],[-2,0],[0,1],[1,1],[1,2],[0,1],[3,-1],[3,-3]],[[2309,8496],[2,-1],[1,0],[1,0],[1,0],[3,-1],[1,-1],[2,0],[1,-1],[-1,0],[-1,-1],[-1,0],[0,-1],[-3,1],[-2,1],[-2,2],[-1,1],[-2,0],[1,1]],[[2267,8501],[1,-1],[1,0],[1,-1],[3,-1],[1,0],[-1,-1],[-3,2],[-4,0],[-2,1],[1,0],[1,0],[1,1]],[[2303,8498],[0,-1],[-1,0],[-1,-2],[1,-2],[-2,-1],[1,0],[-1,2],[-1,1],[0,-1],[-1,-1],[-1,1],[0,1],[-1,0],[0,1],[0,2],[-1,1],[2,2],[1,0],[2,-2],[1,0],[2,-1]],[[2247,8506],[1,0],[0,-2],[-3,-1],[-2,-1],[-1,1],[0,1],[1,1],[1,0],[1,0],[1,1],[1,0]],[[2297,8508],[-1,0],[0,-1],[2,1],[0,-1],[1,-1],[0,-1],[1,0],[1,0],[0,-2],[-1,0],[-1,0],[0,-1],[-1,0],[-1,1],[-1,1],[-2,2],[-1,2],[0,1],[1,-1],[0,2],[1,0],[2,-1],[0,-1]],[[2331,8522],[0,-1],[-1,0],[0,2],[1,1],[0,2],[0,2],[0,1],[1,0],[0,-1],[1,-1],[0,-2],[-1,-1],[0,-1],[-1,-1]],[[2448,8528],[-3,-1],[0,4],[2,0],[1,-3]],[[2443,8528],[1,-4],[4,1],[2,-2],[-1,-3],[-6,1],[-2,2],[-1,5],[0,2],[0,2],[3,-1],[0,-3]],[[2526,8535],[1,-2],[0,-2],[0,-1],[0,-1],[-1,-1],[0,-1],[-1,0],[0,-2],[-1,-1],[-1,0],[-1,0],[-2,-1],[-1,-1],[-1,-1],[-2,0],[-1,0],[-1,0],[0,3],[1,2],[1,2],[3,1],[1,0],[1,1],[0,2],[2,2],[0,-1],[2,1],[1,1]],[[2498,8532],[0,-1],[1,1],[0,-3],[0,-3],[-1,-1],[0,-1],[-1,-2],[-2,-6],[0,4],[1,0],[0,1],[0,2],[-1,2],[1,2],[0,1],[0,1],[0,2],[0,1],[0,1],[1,1],[0,1],[1,0],[0,-1],[1,0],[0,-1],[-1,-1]],[[2459,8667],[0,-2],[-2,0],[-2,1],[-1,0],[-1,0],[-4,-3],[-1,0],[0,4],[0,1],[9,4],[1,-1],[1,-4]],[[2495,8668],[-3,-2],[-2,0],[-2,1],[-3,1],[-1,-1],[-1,-1],[-1,-2],[-2,-1],[0,1],[-7,2],[-1,2],[-1,0],[0,1],[11,3],[5,2],[2,4],[1,1],[3,0],[2,-1],[2,-3],[-1,-2],[-3,-2],[-1,-2],[3,-1]],[[2521,8677],[-3,-9],[0,-2],[2,0],[3,-1],[2,-1],[-2,-4],[6,-2],[6,-10],[5,-1],[-4,-2],[-18,-7],[-4,-1],[-3,1],[-1,3],[1,2],[2,0],[2,-1],[4,6],[3,2],[3,1],[-3,0],[-7,2],[-2,-1],[-2,-2],[-2,0],[1,4],[-3,-3],[-3,0],[-2,1],[-4,2],[3,2],[0,3],[0,2],[0,1],[2,2],[1,1],[2,-1],[3,-2],[-1,2],[-1,2],[1,2],[2,1],[-4,0],[2,3],[10,7],[4,1],[-1,-3]],[[2579,8671],[-2,-1],[-4,1],[-3,2],[0,2],[0,2],[1,1],[2,4],[1,1],[3,-2],[2,0],[2,-1],[1,-1],[1,-2],[0,-1],[-2,-3],[-1,0],[-1,0],[0,-1],[0,-1]],[[3307,8695],[-2,-3],[-1,2],[-2,1],[-2,2],[-2,1],[-4,3],[-2,3],[0,3],[0,16],[1,2],[5,-3],[1,-8],[1,-2],[2,-1],[2,0],[1,-1],[2,-4],[1,-6],[-1,-5]],[[2601,8741],[-1,-2],[-2,-2],[1,-2],[2,-1],[1,0],[0,-4],[0,-2],[-2,-1],[-4,3],[-1,1],[-1,3],[-1,2],[-1,0],[-4,-1],[-1,1],[-1,4],[1,3],[4,1],[4,-4],[0,2],[1,2],[1,2],[2,2],[1,-2],[1,-3],[0,-2]],[[2559,8750],[-1,-4],[0,3],[0,2],[0,1],[0,1],[1,1],[2,0],[-1,-2],[0,-1],[-1,-1]],[[3360,8730],[0,-5],[-6,5],[-12,13],[-1,5],[-1,11],[1,3],[4,-1],[3,-4],[5,-11],[2,-3],[3,-2],[2,-5],[0,-6]],[[3333,8786],[-1,-1],[-2,3],[0,1],[-1,2],[1,1],[2,-1],[2,-1],[1,0],[2,-3],[-1,-1],[-1,0],[-1,0],[-1,0]],[[2613,8838],[0,-1],[-1,1],[-1,0],[0,-1],[-1,1],[1,1],[-1,2],[0,1],[1,0],[0,2],[1,0],[1,1],[0,1],[0,-1],[1,-1],[0,-1],[0,-1],[1,-1],[0,-2],[-2,-1]],[[2711,8847],[7,-2],[1,1],[1,1],[0,-1],[1,-1],[-2,-2],[-1,-2],[-1,0],[-2,1],[-2,2],[-2,3]],[[2661,8847],[-2,-6],[-4,-5],[-1,-2],[1,-2],[3,-6],[2,-3],[-3,-1],[-5,-3],[-1,0],[-1,1],[-1,-1],[-2,-1],[0,-2],[1,-2],[0,-1],[-1,-1],[-2,-1],[-2,4],[-2,2],[-1,1],[-2,0],[-2,-1],[-1,0],[0,3],[1,6],[0,7],[1,2],[3,-1],[3,-2],[2,-2],[0,4],[0,7],[-1,0],[-4,3],[2,4],[4,3],[3,2],[-1,3],[2,1],[3,-1],[1,-2],[0,-2],[1,-1],[1,-1],[2,0],[2,-1],[1,-2]],[[2735,8846],[-3,0],[-2,0],[-1,1],[-1,4],[-2,2],[0,2],[1,1],[3,4],[1,0],[0,-1],[1,-2],[-1,-1],[0,-1],[1,-1],[1,0],[0,-2],[-1,-2],[1,-1],[2,-1],[0,-2]],[[2611,8860],[-1,1],[-1,2],[1,2],[-2,1],[-1,0],[1,2],[1,0],[1,1],[0,-1],[2,-3],[-1,-1],[0,-3],[0,-1]],[[2823,8871],[-2,-2],[-3,0],[-2,2],[1,1],[1,0],[1,1],[-1,1],[3,3],[0,2],[1,1],[1,1],[0,1],[1,0],[1,0],[0,-2],[0,-1],[1,-1],[-1,-1],[-1,-1],[-1,-1],[0,-4]],[[2833,8887],[2,-1],[0,1],[2,-1],[2,-1],[2,-2],[0,-2],[-1,-1],[-2,0],[-2,0],[0,-3],[-2,-1],[-2,3],[0,1],[-1,3],[-2,2],[1,1],[0,2],[1,2],[1,1],[1,-1],[0,-2],[0,-1]],[[2681,8890],[-1,-1],[-1,1],[-1,0],[0,2],[0,1],[1,1],[1,-1],[3,0],[-1,-1],[-1,-2]],[[2768,8923],[-1,-2],[-1,1],[0,1],[0,1],[-1,3],[0,1],[1,1],[0,-1],[2,-1],[-1,-1],[1,-3]],[[2752,8966],[2,-1],[1,0],[0,-1],[-2,-1],[-1,-1],[-1,0],[0,2],[0,2],[-1,1],[2,2],[1,-1],[-1,-1],[0,-1]],[[2900,8970],[-2,-1],[-1,2],[0,2],[2,2],[1,0],[0,-4],[0,-1]],[[2964,8976],[0,-1],[-3,-1],[-2,1],[-4,1],[-3,0],[-3,0],[-3,-2],[-3,0],[-1,2],[-1,1],[-1,4],[5,1],[7,-1],[7,-2],[5,-3]],[[3481,6317],[0,-78],[0,-79],[0,-78],[0,-78],[0,-78],[0,-78],[0,-78],[0,-79],[0,-78],[0,-78],[0,-78],[0,-78],[0,-78],[0,-79],[0,-78],[0,-77]],[[3481,5067],[-2,-1],[-13,-3],[-34,-16],[-4,-3],[-7,-2],[-14,-10],[-95,-37],[-43,-15],[-55,-9],[-39,-13],[-4,0],[-2,-1],[-4,-4],[-2,-1],[-52,-14],[-39,-4],[-4,-2],[-2,2],[-6,-2],[-26,0],[-25,-2],[-6,2],[-7,-2],[-17,-1],[-67,7],[-20,6],[-6,3],[-10,1],[-4,1],[-3,-1],[-7,-1],[-3,-2],[-3,-3],[-2,-2],[-5,-1],[-16,1],[-6,-2],[-11,-5],[-12,-6],[-15,-9],[-28,-18],[-29,-20],[-14,-3],[-30,-9],[-17,-8],[-35,-16],[-13,-4],[-4,0],[-4,-2],[-21,-21],[-15,-7],[-19,-6],[-8,-2],[-41,-5],[-35,-6],[-9,-3],[-4,-2],[-9,-8],[-3,-2],[-4,-1],[-5,-3],[-7,-6],[-11,-12],[-5,-7],[-3,-8],[-1,-9],[-1,-5],[-3,-4],[-2,-3],[-8,-15],[-1,-2],[0,-1],[0,-2],[0,-3],[-2,-5],[-2,-5],[-4,-10],[-1,-4],[-1,-10],[-1,-5],[-4,-2],[-5,0],[-5,-2],[-3,-3],[-3,-4],[0,-1],[1,-1],[-1,-1],[-1,-1],[-9,-5],[-13,-12],[-3,-5],[-2,-5],[0,-2],[0,-3],[1,-1],[0,-2],[-2,-2],[-4,-3],[-9,-3],[-4,-2],[-2,-2],[-3,-5],[-1,-1],[-2,0],[-7,0],[-3,-2],[-9,-11],[-3,-1],[-4,2],[-3,3],[-1,2],[-3,2],[-17,2],[-8,-3],[-7,-6],[-10,-12],[-7,-3],[-1,0],[-1,1],[-2,1],[-1,0],[-1,-1],[-3,-2],[-1,0],[-7,-1],[-2,2],[-3,13],[-4,8],[-6,6],[-9,3],[-5,1],[-3,-1],[-3,-1],[-9,-1],[-16,-5],[-8,-2],[-5,0],[-2,1],[-5,4],[-2,1],[-3,0],[-6,-3],[-19,0],[-9,-1],[-7,-3],[2,-3],[0,-3],[-2,-3],[-3,-2],[-4,4],[-1,1],[-1,0],[-1,1],[-1,0],[-4,-3],[-3,0],[-22,7],[-8,0],[-9,-2],[-7,-5],[-2,-3],[-1,-3],[0,-7],[-1,-4],[-4,1],[-4,4],[-1,2],[-2,-1],[-2,-2],[-1,-3],[-2,0],[-20,0],[-4,1],[0,2],[6,5],[1,4],[-5,8],[-2,8],[-2,3],[-1,1],[-5,4],[-5,6],[-2,1],[-2,0],[-3,-1],[-10,0],[-5,-2],[-7,-7],[-3,-2],[-4,-1],[-8,-3],[-4,0],[-4,1],[-7,5],[-3,1],[-2,0],[-5,1],[-2,1],[-2,-1],[-3,-1],[-1,-2],[-2,-1],[-5,0],[-3,3],[-2,3],[-4,2],[-2,0],[-5,2],[-4,3],[-3,0],[-5,-1],[-35,2],[-5,-1],[-7,-3],[-11,-1],[-4,-2],[-10,-5],[-1,0],[-1,1],[-5,3],[-5,1],[-2,1],[-4,-1],[-9,-3],[-5,-1],[-5,0],[-3,0],[-2,-1],[-5,1],[-6,1],[-11,1],[-6,-2],[-5,-3],[-6,-2],[-5,1],[-4,-2],[-38,0],[-2,0],[-2,-1],[-2,-2],[0,-2],[0,-2],[-1,-1],[-3,-2],[-23,-7],[-6,-1],[-3,2],[-22,6],[-21,1],[-5,-1],[-8,-3],[-4,0],[-4,1],[-6,3],[-4,2],[-4,0],[-4,-1],[-3,-1],[-4,-1],[-5,-4],[-4,-2],[-4,0],[-11,-1],[-11,-4],[-3,-1],[-13,-13],[-7,-3],[-13,-5],[-6,-4],[2,-1],[-1,-2],[-2,-2],[-6,-1],[-2,-2],[-7,-15],[-1,-2],[-8,-4],[-3,-5],[-2,-6],[-1,-6],[0,-5],[3,-5],[5,-2],[6,-1],[5,-2],[-2,-1],[-3,-1],[-5,-1],[-7,-2],[-8,7],[-7,1],[-5,-4],[-2,-5],[1,-7],[4,-4],[-2,-1],[-5,-3],[0,-1],[0,-2],[-1,-1],[-2,1],[-1,0],[-2,4],[-1,5],[-4,1],[-3,0],[-4,-1],[-2,-2],[-1,-1],[-1,-5],[0,-5],[-1,-3],[-3,-1],[-4,-1],[-2,0],[-1,2],[0,3],[-1,1],[-2,2],[-3,1],[-2,0],[-4,-1],[-3,1],[-2,1],[-3,3],[-1,0],[-40,6],[-2,0],[-4,-2],[-2,-1],[-11,2],[-1,0],[9,-9],[1,-2],[-3,-1],[-14,-2],[-4,-1],[-8,-5],[-3,-1],[-3,-3],[0,-4],[1,-4],[6,-2],[-7,-7],[-4,-2],[-9,-2],[-7,-5],[-4,-2],[-20,-3],[-9,-3],[-8,-6],[-3,-3],[-4,-7],[-3,-4],[-2,-4],[0,-5],[3,-7],[-1,-5],[-3,-2],[-9,1],[-17,-1],[-4,-1],[-9,-5],[-8,-1],[-1,-1],[-1,-2],[2,-1],[2,-1],[1,0],[3,-4],[1,-4],[0,-3],[-4,-1],[-2,1],[-11,6],[-2,-1],[-1,1],[-3,-1],[-10,-3],[-3,-1],[-1,-1],[-2,0],[-2,0],[-5,1],[-2,1],[-1,-1],[-4,-1],[-2,0],[-1,0],[-1,1],[-2,1],[-1,0],[-1,-1],[-2,-2],[-13,-1],[-3,-2],[0,-3],[2,-3],[4,-2],[6,-3],[2,0],[1,2],[-1,2],[-1,2],[0,2],[2,1],[3,-1],[4,-8],[3,-1],[8,1],[3,-1],[-1,-3],[-3,0],[-3,0],[-4,-3],[-4,-1],[-9,1],[-6,1],[-11,9],[-14,4],[-13,1],[-4,0],[-6,-3],[-3,-4],[-1,-6],[0,-7],[-7,3],[-11,7],[-8,2],[-7,1],[-2,1],[-12,6],[-3,2],[-7,3],[-4,1],[-2,0],[-1,-3],[-5,1],[-8,3],[-4,0],[-2,0],[-1,-1],[-2,0],[-3,1],[-2,1],[-2,1],[-4,-2],[-3,-3],[-4,-7],[-3,1],[-4,4],[-3,1],[-4,0],[-5,2],[-3,1],[-3,-1],[-2,-1],[-3,0],[-2,1],[-3,1],[-3,1],[-3,0],[-3,-1],[-5,-4],[-3,-3],[-5,-1],[-7,2],[-3,1],[-9,5],[-9,2],[-3,1],[-1,-2],[0,-1],[-1,0],[1,-2],[-16,0],[-2,-2],[-2,-3],[-4,2],[-7,5],[-12,1],[-4,2],[-2,1],[-3,1],[-5,-1],[-2,1],[-5,5],[-9,5],[-4,4],[2,2],[18,-3],[5,-2],[2,0],[1,2],[-1,2],[-2,2],[-3,1],[-7,2],[-4,3],[-2,4],[-4,2],[-1,1],[-1,1],[-2,0],[-1,-2],[5,-9],[-5,-3],[-9,2],[-9,3],[-9,4],[-33,9],[-17,2],[-2,0],[-4,-1],[-3,-1],[-1,2],[1,2],[1,4],[-2,4],[-6,6],[-2,7],[-4,5],[-7,5],[-30,30],[-29,21],[-9,5],[-8,1],[-2,1],[-1,2],[-1,2],[-2,2],[-2,1],[-2,0],[-33,15],[-10,3],[-6,0],[-17,0],[-4,-2],[-6,-9],[-4,-3],[-2,4],[-20,18],[-1,4],[-1,6],[1,9],[0,3],[-2,4],[-6,12],[-1,2],[1,4],[0,31],[-3,9],[0,5],[1,4],[3,9],[2,4],[-4,6],[-2,8],[-1,8],[3,6],[6,5],[1,3],[0,5],[-3,12],[0,4],[3,0],[9,-3],[6,-6],[4,-7],[6,-5],[8,-3],[9,-3],[9,-1],[10,0],[9,1],[9,3],[8,4],[6,4],[18,18],[13,19],[6,13],[3,10],[2,3],[2,2],[2,0],[3,-1],[4,-1],[5,2],[2,6],[0,14],[-1,3],[-1,0],[-2,-2],[-1,-8],[-3,-10],[-1,0],[1,36],[0,21],[-3,19],[-7,28],[-3,18],[-2,8],[0,7],[2,9],[4,6],[10,13],[5,5],[-1,-9],[-12,-12],[0,-11],[6,-16],[5,-9],[5,-2],[2,4],[-1,5],[-4,8],[-4,3],[0,2],[0,3],[-1,2],[-1,3],[-2,2],[-1,1],[2,2],[2,0],[4,-3],[2,0],[10,-1],[3,3],[1,5],[-1,5],[-4,2],[-4,1],[-1,2],[-2,4],[0,3],[1,1],[2,4],[2,2],[2,8],[0,8],[-3,7],[-5,4],[5,5],[1,3],[-2,4],[-3,3],[-6,3],[-3,3],[10,0],[4,2],[1,5],[1,5],[2,8],[0,5],[-1,2],[-3,3],[0,2],[1,3],[0,3],[-1,2],[-2,4],[0,4],[3,28],[-4,34],[-5,18],[-4,10],[-17,22],[-11,25],[-21,29],[-16,37],[-15,31],[-16,25],[-12,11],[-4,14],[0,2],[-1,3],[-13,24],[0,2],[-1,4],[-7,18],[-1,4],[0,8],[-1,4],[-4,18],[-3,6],[0,1],[-2,2],[-1,2],[1,1],[2,2],[0,2],[1,5],[-1,2],[0,2],[-2,1],[-5,3],[-2,1],[-1,4],[1,5],[1,5],[1,5],[-1,2],[-2,5],[-1,5],[-2,2],[-2,2],[-1,1],[-1,8],[5,28],[0,5],[-3,8],[-1,3],[-1,19],[1,19],[3,17],[4,13],[0,4],[0,5],[-6,11],[-3,9],[-1,6],[0,4],[-1,4],[-4,7],[-3,13],[-12,28],[-2,3],[-39,40],[-1,2],[-7,10],[-2,4],[-3,9],[-3,3],[4,8],[0,10],[-1,10],[-13,30],[-5,6],[-19,20],[-11,17],[-1,3],[-2,4],[-10,14],[-3,2],[-8,3],[-3,3],[-17,19],[-3,6],[-1,2],[0,2],[-1,7],[0,2],[-8,25],[-2,9],[0,10],[1,5],[4,8],[1,4],[1,3],[3,4],[0,2],[0,3],[-15,53],[-13,29],[-20,31],[-34,56],[-24,31],[-14,22],[-12,12],[-15,14],[-23,23],[-3,2],[-7,6],[-3,4],[0,5],[-1,5],[1,3],[-3,5],[-3,6],[-6,11],[-6,5],[-8,9],[-5,5],[1,3],[6,-4],[5,-4],[4,-1],[6,-1],[2,-6],[2,-5],[1,8],[1,7],[2,8],[-1,8],[-1,8],[2,7],[3,6],[3,-27],[2,-25],[-1,-9],[2,-8],[3,-4],[3,-6],[1,-4],[4,-1],[-2,7],[-4,9],[-1,7],[2,11],[3,4],[1,24],[-5,12],[1,7],[5,-11],[2,-25],[4,5],[2,-1],[6,0],[0,-9],[2,-5],[0,-6],[3,-3],[1,-4],[2,-4],[2,-6],[1,-11],[-3,-5],[1,-8],[-3,-8],[2,-2],[4,3],[0,7],[0,5],[2,4],[2,9],[-3,9],[1,4],[0,5],[3,1],[3,-4],[1,-4],[1,-5],[2,-6],[-2,-7],[2,-6],[1,-7],[-2,-6],[2,-4],[0,-9],[0,-7],[3,0],[3,2],[1,3],[0,5],[1,2],[4,5],[0,4],[-1,5],[2,1],[4,-9],[0,-4],[0,-6],[0,-5],[-2,-5],[1,-3],[-2,-3],[3,-1],[4,1],[1,-4],[1,-4],[-1,-4],[4,0],[0,5],[2,4],[3,1],[6,2],[5,1],[3,2],[1,-3],[7,0],[1,8],[4,2],[4,2],[4,5],[3,6],[1,7],[-1,9],[-3,5],[3,5],[0,7],[-4,6],[-5,5],[-6,6],[-7,6],[-7,0],[-14,4],[-1,5],[0,3],[-3,4],[-4,6],[-8,10],[-8,1],[-1,7],[-1,5],[2,6],[-3,2],[-2,6],[1,7],[-8,4],[1,6],[-1,5],[-2,4],[-2,2],[-3,4],[-3,2],[-1,3],[0,2],[-2,4],[-3,2],[-5,8],[-2,6],[1,5],[1,6],[2,4],[4,7],[3,7],[5,6],[3,6],[3,2],[1,-7],[1,-9],[-1,-5],[3,-3],[3,0],[2,-1],[1,-2],[5,0],[2,-8],[3,-8],[5,-7],[6,-3],[4,-7],[5,-3],[6,0],[-1,-8],[-1,-3],[1,-5],[1,-1],[4,-2],[2,-1],[1,-4],[-1,-4],[-4,-3],[0,-4],[0,-7],[-1,-5],[-3,-5],[1,-4],[-2,-6],[0,-10],[-2,-6],[5,-7],[0,-4],[8,0],[0,-2],[7,0],[11,19],[4,9],[3,8],[-3,10],[-1,2],[-2,4],[0,2],[0,3],[0,1],[1,0],[2,-1],[4,-1],[5,-5],[0,-5],[-1,-7],[2,-13],[-1,-6],[4,-5],[5,0],[-3,-11],[2,-8],[2,-7],[1,-5],[1,-6],[1,-5],[12,-13],[10,-10],[3,-3],[4,0],[5,4],[4,4],[3,4],[6,3],[5,1],[2,7],[4,6],[-4,9],[-3,7],[-1,6],[-2,5],[2,6],[1,4],[3,10],[1,1],[1,2],[0,3],[0,3],[-2,4],[-6,9],[-1,5],[1,2],[2,-1],[3,-4],[1,-1],[3,1],[3,0],[2,1],[1,0],[2,0],[-2,4],[-2,2],[-3,3],[0,5],[1,4],[3,5],[2,5],[-1,4],[-4,3],[-10,6],[-8,3],[-2,4],[-1,3],[-2,2],[0,3],[-1,4],[-3,3],[-3,2],[-1,1],[-1,4],[-1,1],[-8,4],[-2,3],[-6,14],[-14,18],[-5,9],[-14,32],[-1,5],[-1,3],[-8,13],[-2,5],[-1,3],[-3,2],[-9,5],[-7,3],[-5,4],[-3,5],[-2,8],[-3,5],[-1,4],[-1,3],[0,2],[1,1],[2,4],[1,1],[1,5],[-2,5],[-4,3],[-6,1],[-1,5],[0,4],[-1,5],[2,3],[2,4],[-1,6],[-1,5],[-2,4],[-13,19],[-22,24],[-5,8],[-4,9],[-2,9],[-1,36],[1,5],[1,3],[6,5],[2,5],[0,5],[-3,9],[-1,8],[0,4],[2,4],[3,3],[2,2],[2,4],[1,5],[0,5],[-1,4],[1,4],[7,8],[2,4],[5,20],[3,3],[5,2],[8,24],[1,2],[2,1],[2,0],[1,1],[1,3],[1,1],[5,2],[5,1],[2,3],[1,2],[1,2],[8,5],[3,3],[1,6],[0,2],[2,2],[1,2],[0,15],[2,9],[1,5],[-3,19],[-4,13],[-1,4],[2,5],[0,3],[1,2],[2,1],[2,2],[2,2],[4,4],[1,6],[-1,26],[-1,7],[-3,5],[-3,5],[-3,14],[-10,11],[-2,1],[-3,1],[-3,1],[-4,0],[3,8],[0,5],[-2,4],[-1,2],[0,7],[-1,3],[-1,2],[-1,2],[2,3],[2,2],[4,2],[2,2],[6,9],[3,3],[0,2],[2,10],[1,5],[3,5],[7,7],[2,4],[18,48],[1,5],[1,5],[1,4],[5,8],[5,13],[14,20],[6,5],[6,4],[5,2],[4,0],[5,2],[3,1],[3,1],[3,-2],[1,-4],[-2,-3],[-3,-3],[-2,-3],[0,-4],[-3,-9],[-7,-41],[-3,-7],[-1,-8],[3,-8],[2,-2],[4,-9],[1,-3],[-3,-8],[0,-4],[3,-1],[1,2],[2,4],[2,3],[4,-2],[1,-3],[0,-5],[-2,-4],[-2,0],[-6,-7],[-2,-2],[1,-3],[1,-6],[-3,-8],[2,-6],[6,-4],[7,0],[3,3],[3,5],[3,4],[6,2],[3,0],[2,2],[3,1],[3,-1],[1,-3],[1,-3],[2,-3],[4,-1],[4,2],[2,1],[1,3],[0,5],[1,2],[2,5],[0,2],[1,5],[1,5],[6,13],[2,6],[2,6],[1,1],[5,7],[0,3],[-1,3],[1,2],[2,1],[3,0],[2,1],[1,8],[4,8],[0,4],[-1,2],[-2,3],[-1,1],[-1,2],[-1,4],[0,3],[2,1],[4,-3],[4,-4],[2,-3],[11,19],[2,7],[1,0],[1,0],[0,1],[1,0],[1,2],[1,3],[1,9],[2,3],[5,1],[2,1],[3,4],[2,1],[17,7],[32,19],[9,2],[8,-2],[10,4],[3,1],[2,2],[3,2],[2,0],[1,-3],[26,15],[50,18],[5,3],[2,4],[2,4],[2,3],[7,6],[14,18],[5,5],[8,5],[31,14],[3,2],[2,7],[6,8],[4,9],[6,7],[7,5],[5,3],[3,0],[11,6],[7,2],[3,1],[3,3],[8,1],[7,4],[5,6],[3,8],[0,10],[1,3],[5,1],[3,-1],[3,-2],[4,-2],[6,0],[4,2],[5,5],[3,1],[10,0],[9,1],[4,2],[6,5],[2,1],[2,0],[1,1],[2,2],[2,5],[2,1],[4,0],[8,2],[24,17],[10,9],[8,13],[3,2],[-1,3],[3,2],[2,0],[2,0],[3,-1],[2,-1],[0,-1],[-2,0],[-3,-2],[-2,-4],[-1,-9],[-1,-2],[-3,-3],[-1,-3],[0,-2],[0,-2],[11,-9],[4,-1],[5,-1],[5,1],[4,3],[4,2],[2,3],[2,1],[23,10],[2,1],[4,-3],[1,-1],[3,0],[2,2],[6,5],[2,2],[1,0],[2,-2],[0,-1],[0,-1],[0,-2],[-2,-3],[0,-2],[1,-1],[2,-2],[2,-3],[3,-2],[16,-7],[9,-2],[9,-1],[18,1],[17,4],[6,3],[8,5],[5,3],[4,-1],[3,-3],[3,0],[3,3],[0,1],[2,-1],[1,-2],[-1,-1],[4,1],[8,4],[2,-2],[3,2],[8,3],[5,3],[4,1],[2,0],[2,3],[3,5],[1,1],[3,3],[1,0],[6,1],[1,1],[3,4],[1,2],[-1,4],[1,2],[1,2],[42,28],[4,2],[2,0],[2,1],[1,1],[3,-1],[0,-1],[0,-2],[1,-2],[3,2],[5,-2],[4,2],[3,2],[4,1],[2,1],[4,2],[3,0],[2,0],[1,-2],[1,-2],[2,-2],[4,0],[9,4],[30,5],[1,0],[2,0],[1,1],[1,0],[1,1],[6,1],[2,0],[3,0],[1,-1],[1,-1],[2,-1],[3,0],[4,0],[5,1],[8,6],[5,1],[5,0],[4,1],[6,4],[4,6],[7,11],[16,18],[3,7],[1,5],[2,2],[3,1],[4,3],[7,2],[2,1],[1,2],[0,2],[1,2],[6,3],[5,-1],[9,-8],[0,6],[1,3],[2,2],[4,0],[4,0],[18,-6],[9,-1],[5,-1],[4,0],[9,-3],[4,-1],[2,0],[2,3],[2,0],[2,-1],[1,-2],[1,-2],[1,-2],[8,-5],[5,-2],[4,-1],[5,1],[7,4],[3,1],[2,1],[4,6],[2,0],[4,-1],[2,0],[4,2],[0,2],[-1,3],[0,2],[4,2],[5,1],[10,-1],[23,4],[35,5],[36,3],[29,9],[61,23],[33,14],[32,14],[38,25],[8,8],[3,1],[3,2],[26,26],[22,29],[23,33],[4,13],[4,5],[1,3],[1,5],[1,2],[1,2],[3,3],[2,2],[3,10],[4,9],[2,3],[2,6],[0,2],[-1,3],[-1,2],[-2,1],[-2,2],[-2,6],[3,0],[4,-1],[3,0],[2,2],[2,0],[8,1],[2,1],[10,9],[2,4],[0,4],[-1,3],[-3,2],[-6,4],[6,4],[3,4],[5,12],[3,6],[3,2],[3,-1],[3,-1],[3,-2],[5,0],[4,1],[25,18],[4,5],[2,7],[2,2],[13,6],[5,3],[3,4],[6,8],[0,-1],[2,-1],[1,-1],[2,6],[3,3],[6,2],[16,8],[5,7],[3,7],[2,5],[-1,9],[-1,5],[-4,4],[-6,3],[-7,1],[-7,1],[-7,-2],[-4,-6],[-2,0],[-1,1],[-1,1],[-1,1],[-1,1],[5,7],[3,8],[0,8],[-3,15],[1,14],[0,2],[1,2],[0,3],[-1,2],[-2,4],[-3,4],[0,2],[-1,6],[-3,7],[-1,2],[-2,3],[0,2],[-1,23],[2,26],[4,10],[1,8],[2,3],[2,3],[4,2],[1,3],[12,13],[2,3],[-1,2],[-2,0],[-2,1],[2,5],[3,2],[29,26],[8,5],[-1,-4],[1,-3],[3,0],[3,2],[1,5],[-1,4],[-1,3],[4,1],[3,-1],[2,-2],[2,-3],[1,-3],[3,-1],[12,-3],[-3,4],[-5,10],[-6,8],[-1,2],[0,3],[1,1],[1,1],[1,1],[1,-1],[1,1],[1,1],[-1,3],[1,1],[1,3],[2,3],[3,2],[4,1],[1,-3],[2,-2],[2,-1],[4,0],[2,1],[3,2],[2,0],[5,0],[1,0],[3,2],[3,2],[2,2],[4,0],[3,-1],[11,-4],[-13,11],[-4,6],[0,8],[1,1],[2,4],[0,1],[0,8],[1,2],[2,4],[3,2],[2,2],[7,-1],[2,0],[3,2],[1,3],[1,3],[2,2],[4,1],[2,5],[1,9],[3,7],[5,0],[15,10],[3,-2],[-1,-3],[-4,-6],[9,-4],[4,-3],[-1,-4],[-3,-1],[-3,0],[-2,1],[-3,0],[-3,0],[-1,-2],[-1,-5],[2,-5],[-6,-12],[2,-3],[1,-5],[1,-2],[2,0],[4,2],[3,1],[1,-3],[0,-5],[1,-6],[3,-3],[5,2],[3,-5],[2,-1],[2,-1],[3,1],[1,1],[0,2],[2,2],[1,0],[0,-2],[0,-3],[-1,-3],[-3,-1],[-1,0],[-2,-1],[-1,-3],[0,-5],[2,-4],[4,-2],[4,-1],[2,-2],[1,-3],[0,-5],[0,-2],[-3,-8],[0,-5],[4,-2],[5,-1],[3,-3],[5,-8],[9,-8],[1,-3],[0,-9],[1,-4],[2,-3],[8,-8],[4,-6],[1,-5],[2,-4],[4,-5],[2,-6],[-2,-5],[4,-8],[3,-3],[7,-4],[3,-4],[2,-4],[2,-1],[3,-4],[3,-2],[2,-3],[2,-10],[6,-6],[3,-4],[2,-4],[1,-9],[0,-3],[1,-1],[1,1],[2,2],[1,3],[0,12],[-1,2],[-1,3],[-4,8],[0,2],[0,9],[1,10],[1,2],[4,5],[1,3],[0,3],[0,2],[0,3],[1,2],[1,2],[1,2],[0,5],[1,3],[2,1],[2,2],[1,0],[2,-1],[0,5],[-1,2],[-4,4],[-9,13],[-1,12],[0,4],[3,5],[1,3],[3,-2],[2,0],[2,1],[2,0],[3,-1],[1,0],[3,-3],[0,-1],[3,-10],[1,0],[1,2],[1,1],[4,-2],[4,-2],[4,-4],[2,-3],[0,-3],[1,-2],[1,-2],[2,-1],[2,-2],[5,-2],[2,-1],[3,-4],[3,-4],[3,-4],[4,-2],[5,0],[2,1],[1,2],[-1,1],[-2,1],[-2,0],[-3,1],[-6,6],[-3,7],[-5,17],[-4,8],[-1,4],[2,2],[3,-1],[8,-5],[2,-2],[2,5],[-3,3],[-3,3],[-2,4],[2,3],[6,5],[1,2],[2,4],[3,2],[5,2],[3,2],[3,4],[1,5],[-1,4],[-4,2],[-2,-8],[-4,-5],[-15,-5],[-9,-2],[-5,3],[-8,14],[-1,4],[-2,8],[-2,4],[-4,2],[-7,4],[-3,2],[-7,7],[-4,2],[-18,2],[0,1],[0,2],[4,2],[5,1],[3,2],[-3,5],[9,5],[3,2],[0,4],[-3,2],[-8,-1],[-5,2],[2,-7],[0,-1],[-7,0],[-3,1],[-1,3],[-1,1],[-6,4],[0,1],[-3,2],[-2,1],[-1,1],[-1,1],[-1,2],[10,-3],[3,0],[2,1],[-1,3],[-5,5],[5,-1],[8,-7],[4,-1],[5,-1],[6,-3],[5,-2],[6,1],[-2,3],[-3,1],[-7,1],[4,2],[7,1],[3,1],[-25,13],[-7,2],[0,2],[7,-1],[2,0],[1,4],[21,-7],[13,-1],[-5,5],[-2,2],[-4,1],[-2,1],[-1,1],[-3,3],[0,2],[2,1],[2,0],[3,-2],[4,-2],[4,-1],[2,0],[1,2],[0,3],[0,3],[-1,3],[-2,0],[-9,1],[-2,1],[-1,2],[-2,2],[-2,2],[-2,0],[-2,0],[-1,-1],[0,-1],[2,0],[1,-1],[-1,-1],[-1,-1],[-1,0],[-2,0],[-1,2],[-1,1],[-1,1],[-5,3],[-2,2],[-2,3],[6,0],[2,5],[-1,4],[-4,3],[2,5],[2,2],[2,2],[1,-1],[3,-1],[1,0],[-2,5],[21,1],[6,-1],[1,4],[2,-1],[2,-3],[2,-2],[4,0],[1,0],[1,-1],[1,-3],[1,0],[2,-1],[2,-1],[1,-2],[-2,-2],[-1,0],[-5,1],[-2,0],[1,-3],[4,-2],[5,-1],[4,0],[-4,-3],[-5,-1],[-7,-1],[-5,-1],[15,-11],[6,-2],[3,-1],[2,0],[2,-1],[2,-3],[0,-4],[-1,-2],[-2,-1],[-2,3],[-3,-2],[4,-11],[2,-3],[2,3],[1,0],[1,-1],[1,-1],[1,-1],[1,5],[-1,9],[2,3],[-2,3],[4,0],[4,-1],[4,-2],[1,-1],[4,-3],[4,-3],[1,2],[-7,12],[-2,6],[8,2],[0,2],[-5,2],[-5,3],[-4,4],[-2,4],[4,-1],[9,-4],[5,-1],[5,0],[2,-1],[1,-1],[1,-2],[2,0],[5,1],[8,-1],[4,-2],[5,-4],[4,-1],[1,-2],[6,-16],[2,-3],[3,-1],[17,-2],[7,-1],[2,0],[5,10],[4,3],[3,-1],[6,-4],[5,-3],[5,-2],[26,-1],[7,0],[6,3],[1,-2],[5,2],[10,1],[9,-1],[4,-3],[4,-4],[8,-2],[8,1],[6,4],[-5,1],[-9,-1],[-4,1],[-3,3],[-4,1],[-8,2],[-12,6],[-22,4],[-5,0],[-16,-2],[-3,-2],[-2,-1],[-4,4],[-1,-1],[-1,-1],[-1,0],[-3,0],[-4,1],[-2,1],[-2,7],[-1,2],[-1,1],[0,1],[0,2],[2,5],[1,2],[-1,2],[-2,2],[-1,2],[2,3],[1,2],[0,3],[0,2],[5,2],[2,1],[1,3],[0,15],[1,3],[2,1],[2,0],[3,-1],[1,-3],[0,-3],[0,-4],[0,-2],[1,-2],[5,-4],[2,-4],[2,-4],[2,5],[4,6],[5,4],[6,-1],[-1,4],[-1,15],[-1,8],[2,3],[5,0],[-2,4],[0,5],[1,8],[2,4],[5,3],[5,1],[3,-4],[1,0],[2,5],[1,5],[2,3],[5,3],[-7,3],[-4,1],[-10,-1],[-3,-1],[-2,-2],[-5,-9],[-6,-6],[-10,-21],[-6,-6],[0,3],[0,2],[1,3],[1,3],[-1,2],[-2,1],[-1,2],[-2,7],[-4,11],[-2,4],[0,-3],[0,-2],[-1,-1],[-2,0],[-1,-2],[-1,0],[-3,-3],[-1,16],[-1,3],[-2,4],[-1,5],[1,5],[1,2],[-2,7],[-1,2],[1,2],[0,1],[1,-1],[1,-2],[2,0],[-1,3],[1,2],[0,2],[1,2],[3,-8],[2,5],[0,6],[-2,4],[-4,-1],[1,11],[-1,4],[-5,3],[3,1],[4,-1],[3,-2],[1,0],[1,1],[4,1],[1,1],[0,7],[4,5],[7,0],[7,-3],[6,-5],[3,-1],[4,-1],[5,1],[2,1],[0,15],[0,2],[1,1],[1,1],[2,-1],[0,-1],[-1,-5],[0,-2],[2,-3],[4,-2],[3,1],[2,4],[-5,3],[0,6],[3,5],[3,4],[6,3],[1,1],[-1,2],[-4,1],[0,2],[-6,-3],[-2,-1],[-1,3],[0,3],[2,1],[3,0],[2,2],[0,3],[-2,1],[-4,0],[-1,0],[-1,2],[0,2],[1,5],[4,-2],[1,0],[2,-1],[0,1],[0,1],[1,1],[1,0],[1,0],[0,-4],[1,-1],[1,0],[8,-2],[1,-2],[-2,-3],[-3,-6],[1,0],[8,7],[4,2],[1,0],[2,-4],[2,0],[3,-1],[0,-3],[-2,-3],[-1,-2],[4,0],[6,1],[3,0],[5,-1],[3,-2],[6,-6],[0,-1],[1,-2],[1,-1],[4,-1],[2,0],[1,-1],[1,-1],[0,-4],[-4,-7],[1,-1],[3,-1],[1,2],[2,1],[2,1],[2,-1],[0,-2],[0,-2],[0,-1],[5,-2],[1,3],[0,4],[2,4],[5,-1],[16,-11],[5,-3],[-2,3],[-9,7],[-2,2],[-11,9],[0,3],[4,13],[2,2],[3,2],[3,2],[4,0],[0,2],[-4,0],[-3,1],[-2,2],[-2,3],[-1,-5],[-4,1],[-4,2],[-3,3],[-3,-1],[-9,-6],[-7,-2],[-5,-4],[-2,0],[-3,1],[-1,3],[-1,5],[-1,0],[-1,0],[-1,0],[0,2],[0,2],[1,1],[2,2],[2,2],[3,1],[1,1],[-1,2],[1,2],[3,2],[2,1],[4,1],[1,1],[1,0],[3,-3],[4,0],[4,4],[6,9],[-2,1],[-4,1],[-3,1],[-1,-6],[-1,-1],[-2,0],[-2,0],[-1,2],[0,2],[-1,-1],[-3,-4],[0,-1],[-1,-1],[-5,-2],[-10,-8],[-4,-3],[0,4],[1,1],[1,1],[-2,2],[-1,-3],[-2,0],[1,2],[-1,5],[0,1],[1,2],[2,2],[0,2],[-2,1],[-3,-1],[-3,0],[2,5],[3,2],[1,1],[0,2],[1,1],[2,2],[2,1],[3,0],[2,0],[2,0],[3,-2],[5,-1],[2,-1],[2,-3],[6,8],[3,3],[2,-4],[1,4],[1,5],[-1,5],[-3,2],[0,1],[0,4],[-1,5],[-2,3],[3,0],[2,-1],[4,-3],[2,2],[2,2],[3,0],[2,-1],[0,-4],[-4,-4],[0,-4],[1,1],[2,-8],[2,2],[3,5],[2,1],[0,-1],[1,-1],[2,-1],[1,-2],[-1,-2],[-1,-1],[0,-2],[3,-8],[0,-2],[2,-1],[3,-7],[2,-2],[1,1],[0,2],[-1,1],[1,2],[1,2],[0,2],[-3,12],[-3,4],[0,3],[4,4],[0,-5],[2,-2],[3,-2],[3,0],[3,-1],[1,-2],[2,-1],[4,1],[0,-3],[2,-1],[1,-1],[4,-4],[0,-1],[0,-2],[-1,-2],[3,-2],[5,-3],[3,0],[1,2],[6,2],[13,-3],[3,2],[0,4],[-2,1],[-6,-1],[-3,1],[-2,2],[-1,2],[0,3],[1,0],[2,0],[1,1],[1,1],[-1,2],[-1,0],[-2,0],[-1,1],[0,2],[0,1],[3,0],[2,1],[3,3],[6,2],[-1,3],[-2,1],[-8,-3],[-3,2],[-3,3],[-2,-1],[-2,0],[-1,0],[-1,3],[-1,0],[-1,0],[-1,-1],[-1,0],[-2,-1],[-2,0],[-2,0],[-1,2],[0,2],[0,2],[3,2],[-3,0],[-2,-1],[-2,-1],[-1,-1],[-2,1],[-1,3],[-2,1],[-2,-1],[0,-1],[-1,0],[-2,0],[-2,1],[-2,1],[-1,2],[3,1],[2,0],[1,3],[0,2],[1,1],[3,0],[3,1],[2,0],[1,-1],[0,-1],[1,-2],[3,0],[3,0],[1,1],[0,2],[-1,3],[4,2],[-2,3],[-7,3],[-7,-1],[-1,2],[-6,2],[-2,2],[-1,12],[-1,2],[-3,-1],[-2,-1],[-1,1],[0,3],[-2,0],[-1,0],[-1,1],[0,5],[2,1],[2,0],[3,0],[2,0],[0,2],[-1,2],[0,1],[2,2],[1,-1],[2,0],[3,0],[-2,4],[1,3],[2,1],[8,-2],[2,1],[0,4],[2,0],[3,1],[4,3],[-5,1],[-5,-1],[-4,0],[-1,4],[2,5],[5,4],[5,2],[4,-2],[1,0],[2,4],[2,1],[1,2],[0,6],[1,3],[2,1],[1,-2],[0,-14],[0,-3],[-2,-5],[2,4],[4,3],[3,3],[1,5],[3,-3],[7,-18],[0,-1],[1,0],[1,4],[-2,5],[1,2],[4,-1],[0,2],[0,3],[1,2],[2,2],[-2,1],[0,1],[0,2],[0,2],[6,-5],[-1,7],[0,3],[1,2],[2,1],[2,0],[1,0],[2,-1],[2,-1],[4,0],[1,-4],[-3,-3],[-2,-2],[-1,-2],[2,-1],[4,0],[4,0],[3,1],[-1,3],[0,2],[1,3],[1,0],[1,0],[1,1],[0,1],[-1,2],[-1,1],[2,12],[2,5],[1,2],[-1,4],[-3,4],[-2,3],[1,3],[-1,3],[-1,4],[0,4],[2,4],[0,1],[-2,2],[0,2],[2,2],[3,-1],[-1,3],[3,1],[4,-2],[2,-5],[1,0],[0,1],[2,0],[1,-3],[6,-3],[3,-3],[1,2],[1,1],[1,2],[2,1],[1,-1],[-1,-2],[-3,-6],[1,-2],[0,-2],[-2,-2],[-2,-1],[-3,0],[-1,2],[-2,1],[-3,-2],[1,-2],[0,-1],[-1,-2],[0,-1],[3,-21],[2,-4],[0,-7],[-10,-20],[0,-8],[4,3],[9,25],[2,3],[1,5],[1,10],[1,5],[3,1],[2,-3],[-2,-4],[2,-1],[0,-2],[-2,-6],[8,1],[3,2],[1,2],[1,2],[1,1],[2,-1],[0,-2],[0,-1],[-1,-1],[1,-1],[2,-1],[1,1],[1,1],[2,2],[2,0],[1,-2],[0,-2],[-1,-2],[-2,-1],[-4,-1],[4,-8],[-3,-3],[0,-1],[4,-2],[0,-1],[-2,-2],[0,-3],[1,-2],[1,-2],[2,-2],[2,0],[7,-6],[4,-2],[2,0],[2,9],[-1,1],[-1,2],[-2,2],[-1,1],[0,1],[1,1],[1,0],[1,5],[1,3],[1,1],[7,0],[1,0],[1,-1],[2,-4],[1,-1],[3,1],[1,3],[-1,2],[1,2],[2,0],[4,-2],[1,0],[2,2],[0,3],[-1,3],[-1,2],[0,3],[-3,3],[-1,2],[0,3],[-1,1],[-2,1],[-2,1],[-1,1],[-1,1],[-1,2],[1,3],[1,-1],[3,1],[2,2],[0,1],[1,0],[4,2],[6,1],[1,2],[-1,3],[0,2],[1,2],[2,2],[0,1],[0,2],[-2,4],[-1,2],[0,3],[0,2],[2,2],[7,1],[1,1],[2,1],[5,4],[1,0],[0,4],[0,4],[-1,4],[3,2],[-4,8],[-6,4],[-22,0],[-3,2],[-1,3],[-1,2],[-2,3],[0,3],[0,1],[1,3],[1,2],[2,-2],[4,-5],[2,-2],[3,1],[0,2],[0,3],[0,3],[3,2],[6,-9],[5,0],[-1,2],[0,2],[0,2],[-1,3],[-1,3],[0,1],[-2,1],[-8,4],[-2,1],[-2,3],[0,1],[3,-1],[6,-2],[1,1],[1,4],[1,2],[3,3],[2,0],[1,-2],[-1,-3],[-1,-2],[0,-1],[6,-1],[2,-1],[2,0],[3,2],[-1,-2],[-1,-2],[-3,-3],[1,0],[2,-1],[2,-1],[0,-1],[-4,-1],[-2,-3],[-2,-3],[-1,-4],[4,2],[3,2],[6,5],[2,2],[2,1],[7,2],[-3,-5],[-7,-4],[-2,-3],[5,-1],[4,-3],[1,-2],[-4,-2],[-6,-1],[0,-1],[0,-3],[0,-4],[7,2],[3,-1],[0,-4],[-6,-5],[-1,-2],[4,1],[-2,-7],[5,-3],[6,-2],[1,-3],[-2,-1],[-1,0],[-1,-1],[0,-2],[1,0],[3,-1],[0,-1],[3,2],[3,1],[2,0],[1,-4],[2,0],[0,3],[1,3],[2,2],[8,2],[0,2],[-2,3],[-4,3],[-1,1],[-2,0],[-2,0],[-1,1],[1,2],[3,3],[0,4],[1,2],[2,2],[4,1],[-1,1],[-1,1],[-1,1],[3,3],[4,0],[3,1],[3,8],[7,5],[2,3],[4,-5],[5,0],[3,3],[3,3],[4,6],[2,2],[3,-1],[6,-2],[-3,-1],[-3,-2],[-3,-2],[-1,-2],[-1,-2],[-1,-1],[-2,-1],[-1,-1],[-1,-6],[0,-2],[-7,-6],[-2,-4],[2,-2],[4,1],[8,3],[2,-1],[-7,-9],[1,-1],[3,-5],[2,-1],[3,0],[3,2],[2,1],[2,-2],[1,-2],[-1,-7],[0,-3],[1,-3],[2,-1],[2,-1],[2,-2],[0,6],[1,3],[1,3],[2,1],[3,1],[3,1],[1,4],[0,2],[-1,2],[0,2],[2,3],[0,1],[-1,2],[-1,2],[1,3],[1,-1],[4,-2],[1,-2],[1,-2],[1,-4],[1,-1],[2,0],[4,7],[3,3],[-2,3],[2,3],[2,4],[1,4],[-2,0],[-1,-2],[-1,-1],[-2,-2],[-3,3],[-1,3],[-1,3],[2,2],[1,0],[5,-2],[3,0],[0,2],[3,3],[2,-1],[3,0],[1,1],[6,-3],[2,0],[3,3],[-4,1],[-2,2],[-1,1],[2,2],[3,0],[5,-2],[-1,3],[-1,1],[-2,1],[-4,0],[-2,1],[-2,2],[-1,3],[0,4],[-1,1],[-4,5],[-1,2],[-3,9],[-1,3],[3,0],[5,1],[4,2],[1,2],[1,0],[2,-2],[1,-3],[-1,-5],[2,0],[2,-1],[1,3],[2,1],[2,1],[3,0],[0,1],[-4,2],[-3,3],[0,3],[4,3],[4,-1],[3,-2],[4,-2],[4,1],[-5,3],[-1,1],[2,1],[3,1],[5,2],[6,-7],[3,-2],[4,-2],[2,-1],[0,-3],[0,-8],[3,3],[3,0],[1,-1],[-1,-5],[4,3],[1,-3],[-2,-6],[-2,-4],[7,1],[2,-4],[0,-6],[3,-5],[4,-4],[3,3],[3,5],[4,4],[-2,1],[-1,2],[0,2],[1,2],[4,-2],[1,-2],[0,-7],[0,-3],[2,-1],[2,2],[2,1],[2,7],[3,3],[3,-1],[8,-9],[3,-3],[6,-2],[0,4],[-2,5],[2,4],[3,-1],[2,-2],[1,-3],[2,-2],[3,0],[2,-1],[1,-2],[1,-3],[1,0],[0,2],[3,3],[2,-3],[3,-3],[1,-4],[1,-4],[0,-2],[-1,-7],[1,-2],[4,-3],[2,-2],[2,4],[3,-1],[4,-4],[2,-2],[4,-1],[6,-6],[3,-2],[1,0],[3,0],[1,0],[0,-1],[2,-2],[9,-7],[2,-4],[2,-4],[3,-5],[13,-10],[1,-3],[6,-15],[2,-1],[4,-1],[2,-1],[0,-2],[0,-8],[0,-3],[2,-1],[1,0],[1,1],[0,3],[2,2],[1,0],[3,-2],[2,-3],[-6,-6],[1,-4],[4,3],[2,-1],[4,-5],[8,-5],[3,-3],[-2,-1],[-1,-1],[0,-3],[0,-2],[1,-2],[3,-1],[2,0],[5,2],[2,2],[1,0],[3,-2],[5,-4],[1,-1],[1,-2],[2,-3],[1,-4],[3,-2],[4,0],[2,0],[2,-2],[9,-8],[4,-2],[4,-1],[3,0],[1,1],[1,-1],[2,-2],[1,-2],[0,-2],[0,-2],[-1,-1],[-3,2],[-3,0],[-3,-1],[-1,-3],[0,-4],[3,-8],[0,-3],[-1,-2],[-2,-1],[-4,0],[-3,0],[-2,-1],[-5,-3],[5,-2],[-1,-7],[-5,-15],[-1,-3],[-3,-5],[-1,-3],[0,-4],[1,-4],[-1,-3],[-3,-6],[-1,-4],[-1,-4],[1,-4],[2,-4],[1,-3],[-2,-23],[-1,-2],[-2,-1],[-4,0],[6,-16],[0,-8],[-3,-9],[-8,-8],[-1,-2],[2,-2],[5,2],[5,4],[3,3],[4,7],[2,10],[1,10],[0,9],[-3,14],[2,1],[0,3],[-1,3],[1,2],[3,2],[2,-2],[2,-2],[7,-3],[10,-11],[3,-3],[0,-1],[4,-7],[5,-16],[1,-4],[1,0],[2,19],[-1,6],[-3,4],[-8,7],[-2,3],[-3,4],[0,5],[1,4],[1,1],[-2,10],[-1,1],[-2,1],[-1,1],[-1,10],[5,8],[11,11],[1,0],[1,1],[1,1],[0,1],[0,2],[0,1],[3,4],[4,4],[2,-1],[1,-5],[3,-19],[2,-4],[3,-2],[-1,7],[-1,4],[2,3],[7,-9],[4,-3],[6,-2],[1,1],[1,2],[1,2],[1,2],[-1,3],[0,2],[-1,1],[-1,1],[-6,10],[-1,5],[-2,5],[0,2],[0,3],[1,1],[1,0],[2,1],[2,1],[1,1],[0,1],[-1,2],[-2,1],[-3,1],[-2,1],[-3,5],[1,1],[10,1],[9,3],[4,2],[3,2],[4,2],[5,-1],[8,-5],[18,-2],[8,-2],[8,-6],[4,1],[5,-1],[5,-2],[4,-1],[19,0],[4,-2],[8,-4],[4,0],[1,-1]],[[7887,4260],[-16,3],[-2,-1],[-1,0],[-3,-3],[-1,-3],[-1,0],[-2,-1],[-1,1],[-3,1],[-1,1],[-2,-1],[-1,0],[-2,-1],[0,-2],[-4,-5],[-1,-2],[-2,-1],[-1,0],[0,-1],[-1,-1],[0,-1],[0,-1],[1,-2],[0,-1],[-2,-3],[0,-1],[1,-3],[1,-1],[0,-1],[1,-3],[0,-2],[-1,-2],[-3,-6],[-1,-2],[1,-1],[-2,-3],[-6,-2],[-1,-1],[-1,-3],[0,-4],[3,-12],[1,-7],[0,-3],[-2,-7],[0,-1],[0,-2],[2,-9],[0,-2],[0,-3],[-1,-3],[0,-1],[-1,-1],[-1,-1],[-2,-1],[-1,-1],[-1,0],[-1,-1],[-1,-2],[-1,-4],[-1,-1],[-1,-1],[-1,0],[-1,-1],[-1,0],[-1,1],[-6,3],[-12,3],[-2,1],[-1,1],[-1,1],[-2,2],[-3,6],[-1,4],[-2,13],[0,4],[-1,2],[-1,1],[-2,0],[-1,0],[-1,-1],[-1,0],[-1,-2],[-1,-1],[-1,-1],[-1,1],[-1,0],[-1,1],[-7,6],[-1,1],[-1,1],[0,2],[0,1],[0,3],[0,1],[-1,1],[-3,2],[0,2],[0,3],[1,7],[1,3],[0,3],[-2,7],[-1,9],[0,3],[3,10],[1,5],[1,2],[3,6],[0,3],[0,1],[0,1],[-1,2],[0,1],[0,1],[1,2],[1,2],[2,2],[1,1],[25,15],[35,22],[6,2],[11,-7],[1,-1],[1,-1],[1,-1],[0,-2],[0,-2],[0,-1],[0,-1],[0,-1],[1,-1],[2,-1],[3,-1],[2,0],[1,0],[2,-1],[0,-2],[0,-1],[0,-1],[0,-1],[1,-2],[2,-1],[11,-4],[2,-1],[2,0],[5,-2],[10,-4],[1,-1],[1,-1],[-3,-3],[-2,-1],[-3,-2],[-2,-1],[-2,0]],[[8160,4298],[-6,-2],[-7,-4],[-1,-1],[-1,-4],[-1,-2],[-1,-2],[-2,-2],[-5,-5],[-3,-4],[-1,-4],[1,-6],[0,-3],[1,-1],[0,-1],[-1,-2],[-7,-4],[-1,-1],[-1,-4],[-3,-3],[-3,-4],[-2,-2],[0,-5],[0,-11],[0,-2],[-4,-2],[-4,-5],[-8,-13],[-6,-14],[-3,-4],[-4,-2],[-5,1],[-4,3],[-2,-1],[-7,-2],[6,-6],[1,-6],[1,-1],[2,-3],[1,-3],[-1,-5],[-1,-2],[-3,-1],[-6,-2],[0,-1],[-8,-7],[-1,-1],[0,-3],[2,-6],[1,-4],[-2,-15],[-1,-8],[-4,1],[-5,2],[-4,-3],[0,-2],[0,-1],[-2,-2],[2,0],[1,0],[1,1],[1,1],[3,-2],[4,-3],[2,-4],[-5,-8],[0,-5],[0,-4],[5,-13],[0,-4],[-3,-2],[0,-1],[2,-5],[0,-3],[-1,-2],[-2,-2],[-4,-3],[-3,-3],[-3,-4],[-2,-5],[-1,-5],[1,-5],[1,-2],[-1,-2],[-3,-4],[-1,-2],[2,-10],[1,-5],[-2,-4],[-6,-9],[-7,-13],[-2,-4],[0,-4],[-1,-5],[-1,-6],[-3,-5],[-4,-5],[-4,-3],[3,-5],[-2,-4],[-5,-7],[-1,-5],[1,-3],[4,-1],[3,-2],[-2,-2],[-2,-4],[-1,-5],[2,-3],[1,-2],[2,-2],[0,-1],[0,-3],[0,-2],[-1,-1],[-1,-1],[-1,1],[-1,1],[-4,-2],[-3,-3],[-1,-1],[-2,-1],[1,-3],[3,-2],[4,-1],[3,0],[2,1],[2,0],[3,-1],[8,-6],[2,-2],[1,-3],[1,-7],[1,-4],[7,-10],[0,-2],[-5,2],[-5,2],[-5,0],[-4,-2],[-3,-4],[0,-3],[4,-8],[-3,-9],[0,-8],[2,-9],[4,-9],[-2,-3]],[[8022,3788],[-46,19],[-47,19],[-47,19],[-47,19],[-47,19],[-47,20],[-47,19],[-47,19],[-5,2],[-13,1],[-5,1],[-3,1],[0,1],[16,21],[2,4],[2,5],[1,5],[-1,2],[-4,7],[-2,1],[-3,0],[-2,1],[-2,1],[-1,2],[0,2],[-1,2],[1,9],[-1,1],[-1,1],[-1,1],[0,5],[-1,2],[-2,2],[-8,5],[-4,4],[-1,4],[0,3],[3,3],[1,2],[-1,3],[0,2],[-2,3],[-5,13],[0,2],[-3,3],[1,5],[2,9],[-2,4],[-8,5],[-1,4],[1,6],[1,3],[-1,3],[-6,2],[-4,1],[-2,0],[-3,2],[-1,2],[-2,3],[-1,2],[-2,0],[-6,1],[-28,12],[-3,0],[-3,1],[-3,0],[-2,-1],[-3,-3],[-1,-1],[-25,-8],[-4,2],[-1,4],[-3,3],[-4,2],[-4,1],[-2,-1],[-4,-2],[-2,-1],[-6,1],[-2,-1],[-3,-1],[-3,-3],[-3,-3],[-2,-3],[-3,-12],[-1,-3],[-4,3],[-4,2],[-4,1],[-3,0],[-1,0],[-11,-3],[-7,0],[-4,1],[-3,2],[-2,2],[-2,0],[-2,-1],[-6,-6],[-1,-2],[0,-1],[-2,-3],[-1,-1],[0,-2],[1,-1],[0,-2],[1,-1],[1,-6],[0,-2],[2,-3],[2,-2],[2,-2],[3,-1],[3,-1],[6,0],[3,0],[2,-3],[-20,-4],[-3,1],[-9,9],[-2,4],[-1,8],[2,7],[-6,3],[-3,1],[-3,0],[-4,-1],[-1,-2],[-1,-2],[-1,-1],[-6,0],[-5,4],[-6,2],[-7,-2],[-4,4],[-2,1],[-1,1],[-6,0],[-3,1],[-4,4],[-4,1],[-5,0],[-5,0],[-4,3],[-7,7],[-3,1],[-17,0],[-3,1],[-4,3],[-2,0],[-2,0],[-2,-2],[-3,-1],[-2,1],[-2,1],[-3,0],[-2,-1],[-10,-14],[-3,-1],[-15,2],[-8,2],[-5,0],[-3,-1],[-1,0],[-2,-4],[-3,2],[-4,1],[-5,1],[-13,1],[-5,2],[-3,2],[-7,1],[-8,-1],[-2,0],[-2,2],[-1,2],[-1,3],[-1,2],[-4,2],[-5,1],[-5,-1],[-14,-4],[-10,1],[-9,3],[-37,27],[-8,3],[-9,0],[-9,-2],[-17,-7],[-9,-1],[-9,1],[-9,3],[-7,1],[-21,0],[-24,-3],[-3,-2],[-4,-3],[-1,-1],[-2,-13],[-5,-8],[-1,-4],[2,-4],[4,-3],[3,-5],[2,-4],[-2,-4],[-4,0],[-10,4],[-5,1],[-4,-2],[-8,-7],[-5,-3],[-9,-1],[-6,0],[-3,2],[0,2],[-1,1],[-1,0],[-3,0],[0,1],[-1,2],[-4,3],[-4,1],[-9,1],[-4,2],[-24,23],[-8,3],[-4,4],[-3,4],[-10,21],[-5,9],[-6,5],[-3,0],[-5,0],[-3,1],[-1,1],[-4,4],[-3,2],[-4,3],[-1,1],[-1,2],[-2,1],[-2,0],[-2,1],[-7,7],[-11,13],[-7,4],[-10,1],[-5,2],[-4,7],[-4,3],[-13,4],[-9,5],[-5,4],[-2,1],[-2,1],[-5,1],[-1,1],[-1,2],[-2,1],[-9,4],[-18,3],[-12,6],[-2,2],[-2,2],[0,3],[1,2],[1,1],[1,2],[0,4],[0,5],[-2,4],[-4,3],[-3,2],[-19,3],[-5,3],[-4,2],[-3,2],[-5,7],[-4,9],[-3,9],[-2,13],[-2,6],[0,4],[0,1],[2,5],[1,2],[0,1],[-1,2],[-1,2],[0,2],[1,1],[2,1],[1,2],[1,2],[0,1],[-1,3],[-1,2],[2,5],[0,2],[-1,1],[-6,4],[-3,0],[-4,-2],[-3,0],[-1,5],[-2,3],[-4,2],[-4,1],[-2,2],[-14,7],[-3,0],[-20,2],[-8,4],[-4,1],[-1,-3],[-2,-2],[-4,2],[-6,5],[-3,0],[-1,0],[-2,-2],[-6,-2],[0,1],[-2,3],[-1,2],[-1,5],[-1,2],[-2,1],[-6,2],[-3,3],[-1,1],[-2,1],[-3,0],[-4,-2],[-3,-1],[-4,-1],[-2,-4],[-2,-10],[-1,-1],[-1,-1],[-1,-2],[0,-1],[0,-4],[1,-2],[-1,-4],[-2,-1],[-2,1],[-4,0],[-4,0],[-2,-1],[0,-1],[1,-4],[2,-4],[0,-2],[-4,-2],[-4,3],[-3,1],[-3,0],[-5,1],[-2,1],[-2,1],[-2,2],[-1,1],[0,5],[0,2],[-6,12],[-5,5],[-1,2],[0,2],[0,1],[0,2],[0,1],[-2,3],[-14,10],[-2,3],[-3,19],[0,5],[2,4],[4,7],[2,4],[-3,4],[-3,0],[-3,-1],[-5,0],[-3,2],[-5,3],[-5,5],[-2,3],[-2,1],[-1,1],[-1,2],[0,5],[-1,5],[-3,5],[0,1],[-3,0],[-5,0],[-2,1],[-3,3],[-3,2],[-3,1],[-4,0],[-2,0],[-4,-2],[-2,0],[-4,7],[-5,5],[-6,0],[-12,-2],[-2,0],[-2,0],[-3,0],[-2,1],[-5,-2],[-4,-1],[-10,0],[-5,1],[-10,4],[-5,1],[-9,-1],[-9,-4],[-7,-5],[-6,-4],[-5,-7],[-3,-3],[-5,-1],[-2,1],[-1,1],[-1,2],[-2,5],[-1,1],[-11,1],[-3,1],[-7,4],[-1,1],[-4,2],[-5,-1],[-5,-2],[-3,0],[-2,2],[-3,5],[-2,1],[-3,1],[-2,2],[-2,2],[-2,1],[-1,0],[-2,1],[-2,1],[-1,-1],[-3,-2],[-2,-1],[-4,0],[-2,2],[-1,1],[-3,2],[-6,1],[-19,0],[-5,3],[-5,7]],[[6079,4555],[0,67],[0,69],[0,69],[0,69],[0,69],[0,69],[0,69],[0,70],[0,69],[0,69],[0,69],[0,69],[0,69],[0,69],[0,69],[0,69]],[[6079,5658],[105,0],[106,0],[105,0],[105,0],[105,0],[105,0],[105,0],[105,0],[106,0],[105,0],[105,0],[105,0],[105,0],[105,0],[106,0],[105,0],[42,0],[1,0],[6,5],[5,2],[5,3],[4,4],[2,4],[2,10],[2,5],[4,2],[5,0],[5,2],[5,3],[4,2],[1,2],[2,3],[1,2],[4,2],[3,1],[3,3],[1,2],[2,0],[22,10],[4,1],[4,2],[4,4],[8,15],[3,2],[20,3],[4,1],[3,-3],[1,-3],[1,-3],[4,-2],[8,1],[4,-1],[3,-3],[5,3],[3,1],[3,1],[25,0],[8,0],[9,1],[4,1],[7,-1],[4,0],[8,4],[10,2],[12,4],[3,1],[14,-1],[4,1],[4,2],[5,2],[5,-2],[9,-7],[12,-11],[7,-5],[9,-2],[28,0],[9,0],[19,5],[9,0],[9,-3],[8,-5],[4,-2],[10,-2],[3,-2],[3,-3],[4,-3],[4,0],[6,-1],[4,-1],[2,-4],[0,-8],[0,-5],[1,-4],[4,-2],[5,0],[8,-1],[5,-1],[4,-2],[8,-6],[15,-8],[3,-14],[2,-3],[-2,-3],[1,-1],[0,-2],[1,-1],[0,-7],[1,-8],[1,-2],[4,-2],[1,-1],[1,-4],[-1,-3],[2,-3],[5,-1],[2,1],[5,2],[4,1],[0,1],[0,1],[1,2],[5,2],[2,1],[1,3],[4,5],[2,1],[4,3],[2,1],[0,2],[0,6],[1,4],[5,8],[1,3],[1,1],[1,0],[2,1],[2,0],[1,0],[1,1],[4,2],[2,1],[1,0],[3,0],[1,0],[3,1],[2,1],[8,5],[3,2],[1,0],[1,0],[1,0],[7,-13],[1,-1],[1,0],[1,-1],[1,0],[3,0],[2,0],[1,-1],[1,-2],[1,0],[1,-1],[2,1],[1,1],[1,6],[2,3],[1,1],[1,1],[1,0],[2,0],[1,0],[4,0],[5,-2],[1,0],[1,0],[1,0],[7,3],[2,1],[2,0],[3,0],[1,0],[1,1],[1,1],[1,1],[1,1],[1,2],[0,1],[0,5],[0,2],[3,5],[1,2],[0,3],[0,6],[1,5],[0,3],[1,1],[0,1],[2,2],[1,2],[0,1],[0,1],[-2,3],[-6,6],[-5,4],[-1,1],[-1,2],[0,2],[-1,4],[-2,3],[-5,5],[0,3],[0,1],[1,1],[1,0],[1,1],[1,1],[3,0],[2,0],[2,1],[5,4],[1,1],[2,3],[25,11],[2,1],[3,0],[7,-1],[1,0],[2,1],[2,1],[2,1],[3,4],[6,4],[2,1],[2,1],[10,1],[6,2],[4,2],[1,1],[1,1],[0,1],[3,8],[1,0],[4,2],[6,6],[2,1],[1,1],[2,0],[2,-1],[4,-3],[1,-2],[1,-2],[0,-2],[0,-1],[0,-1],[1,-1],[1,-1],[1,-1],[3,-1],[2,0],[2,0],[2,2],[1,1],[0,2],[1,1],[0,1],[1,1],[1,1],[1,0],[1,0],[6,-5],[1,-1],[21,-8],[2,0],[2,0],[3,0],[3,1],[6,2],[1,1],[3,2],[1,1],[1,0],[3,0],[5,0],[4,-1],[6,-2],[2,-1],[12,0],[1,-1],[1,0],[12,0],[2,0],[2,0],[2,-1],[1,-1],[2,1],[2,0],[4,3],[4,7],[2,1],[1,0],[1,1],[1,2],[1,2],[3,4],[5,0],[3,0],[18,4],[2,0],[7,-2],[6,3],[19,14],[8,6]],[[8787,5845],[5,-7],[7,1],[2,-4],[2,-12],[2,-5],[0,-11],[-6,-31],[0,-10],[3,-18],[2,-4],[7,-8],[3,-4],[-1,-1],[-2,-5],[0,-2],[0,-2],[0,-2],[0,-3],[-4,-7],[0,-5],[2,-9],[-1,-9],[-5,-7],[-13,-10],[-10,-12],[-5,-8],[-3,-8],[-1,-3],[0,-2],[2,-10],[1,-3],[-1,-1],[-4,-1],[-1,-1],[-1,-2],[-10,-14],[-4,-9],[-2,-9],[2,-9],[3,-4],[1,-4],[-2,-3],[-1,-3],[0,-4],[1,-4],[1,-2],[-3,-4],[-2,-10],[-3,-7],[-1,-2],[0,-5],[0,-1],[1,-2],[0,-1],[0,-2],[-2,-2],[-1,-2],[1,-5],[1,-3],[0,-4],[-6,-8],[-1,-4],[-1,-4],[0,-3],[2,-9],[-1,-2],[-3,-3],[-1,-2],[0,-9],[-1,-5],[-2,-5],[-7,-9],[-1,-3],[-1,-2],[-3,-4],[-1,-2],[0,-2],[2,-6],[-1,-12],[-3,-11],[-11,-18],[2,-6],[-3,-8],[-10,-15],[-1,-3],[-2,-7],[-5,-8],[-2,-5],[-4,-18],[-1,-12],[-2,-4],[0,-1],[-5,-18],[3,-3],[1,-19],[5,-8],[2,-2],[1,-1],[3,-1],[2,0],[1,1],[1,1],[1,-1],[2,-2],[0,-2],[0,-5],[0,-2],[-1,-2],[-4,-3],[-4,-7],[-1,-8],[1,-4],[3,-1],[0,-2],[0,-4],[-4,-3],[-7,-7],[-6,-9],[0,-8],[-5,-9],[3,-3],[1,-14],[-10,-10],[-3,-7],[0,-5],[4,-4],[1,-4],[0,-1],[-1,-5],[-6,-5],[-7,-6],[-6,-8],[1,-7],[-3,-5],[2,-4],[-3,-3],[-5,-4],[-5,-6],[4,-4],[-1,-3],[-6,-5],[-6,-8],[-2,-8],[2,-3],[-7,-4],[-4,-5],[-7,-4],[-12,-10],[-13,-21],[2,-6],[-6,-6],[-2,-4],[-1,-5],[-1,-5],[1,-4],[5,-1],[2,-3],[4,-2],[1,-3],[-3,-3],[-2,-3],[-2,-3],[-1,-2],[-2,-2],[0,-3],[1,-4],[2,-1],[4,-1],[-1,-2],[-1,-1],[-1,0],[0,-2],[-1,-2],[-1,-4],[-2,-4],[-1,-5],[0,-3],[4,-4],[-29,-10],[-11,-6],[-13,-9],[-2,-7],[-4,-1],[-6,-3],[-6,-5],[-4,-5],[-1,-4],[4,-3],[3,-3],[-3,0],[-1,1],[-1,1],[-1,1],[-1,0],[-3,0],[-1,0],[-5,4],[-2,1],[0,-1],[-4,-3],[-2,-1],[-10,-3],[5,-4],[2,0],[16,0],[2,-1],[3,-1],[1,-1],[-1,-1],[0,-5],[-1,-2],[-3,-1],[-5,1],[-2,-1],[-2,-2],[-1,-1],[-1,-1],[-3,-1],[-11,2],[-16,-3],[-10,-4],[-13,-6],[-5,-3],[-4,-2],[-8,-6],[1,-6],[-3,-2],[-4,-3],[-5,-3],[-2,-3],[-1,-5],[0,-4],[-3,-1],[-4,-3],[-4,-4],[-3,-3],[-1,-2],[0,-3],[-3,-6],[-1,-7],[-2,-3],[-2,-4],[0,-3],[-3,-4],[-5,-2],[-5,-6],[-1,-4],[3,-4],[-2,-2],[-8,-6],[-3,-2],[0,2],[3,3],[2,6],[-5,3],[-6,-2],[-8,-7],[0,-2],[4,-3],[-3,-1],[-3,-1],[0,-2],[2,-2],[2,-1],[3,-1],[3,3],[1,2],[2,-1],[0,-3],[-3,-4],[-1,-4],[-6,-5],[-3,-4],[2,-2],[0,-2],[-3,-2],[1,-3],[1,-2],[-1,-1],[-3,-1],[1,-3],[-1,-1],[0,-2],[-1,-1],[-2,-1],[-2,-1],[-4,0],[-2,0],[-3,1],[-2,-2],[-3,-2],[-5,0],[-2,0],[-6,-3],[-3,0],[-3,4],[-2,5],[-3,-3],[-1,-4],[2,-4],[4,-2],[-1,-2],[-2,-1],[-1,-1],[-2,-1],[0,-1],[5,1],[7,7],[4,0],[2,-1],[-2,-6],[-2,-7],[1,-3],[3,3],[2,3],[2,7],[3,-6],[-4,-11],[-3,-5],[-1,-6],[0,-2],[2,-2],[1,-2],[0,-3],[-2,-5],[-1,-10],[-3,-1],[-3,1],[-2,0],[-3,-3],[-2,-3],[1,-3],[1,-1],[3,-1],[3,1],[1,3],[0,1],[2,-3],[-1,-5],[-4,-10],[2,-3],[-3,-7],[-2,-2],[-2,-3],[-2,1],[-6,7],[-2,2],[-4,-1],[-1,-2],[-1,-3],[-2,-3],[-4,-1],[-5,1],[-4,0],[-2,-3],[6,-1],[2,-1],[2,-2],[1,0],[3,3],[13,-1],[2,0],[0,-4],[-1,-1],[-10,0],[-1,0],[-1,0],[-1,-2],[-2,-2],[0,-2],[-2,-1],[-2,-1],[2,-1],[5,0],[1,-1],[0,-2],[-1,-2],[-4,-3],[-9,-6],[-3,-3],[-6,-2],[-9,-6],[-4,-4],[-9,-10],[-6,-8],[-3,-7],[1,-7],[-5,-10],[-1,-9],[3,-8],[-4,-3],[-2,-6],[-3,-4],[-4,1],[2,4],[-1,2],[-3,1],[-1,0],[-2,-1],[-7,-7],[1,-2],[1,-1],[2,0],[5,0],[3,-2],[6,-5],[3,-2],[4,-1],[-7,0],[-3,-5],[-5,-27],[-3,-7],[-5,-3],[-7,-2],[-5,-11],[-6,-3],[0,-1],[2,-2],[4,-2],[2,-1],[3,-1],[0,-2],[-3,-2],[-4,0],[2,-2],[5,-2],[2,-2],[-2,-1],[2,-2],[-2,-6],[4,-4],[7,-1],[5,-1],[1,-1],[-3,-8],[0,-5],[-2,-3],[-6,-4],[-2,3],[-2,2],[-2,2],[1,3],[2,3],[-2,5],[1,3],[-4,2],[-4,-1],[-4,-1],[-8,-2],[-2,-3],[-2,-8],[4,-1],[1,-3],[0,-4],[1,-2]],[[5348,4211],[3,-1],[-1,-3],[-3,-2],[-4,-1],[-4,-3],[0,-3],[4,-2],[7,0],[3,0],[0,-2],[-5,-6],[-9,-8],[4,-4],[5,0],[5,0],[9,-3],[5,0],[9,2],[3,1],[1,1],[2,0],[2,-2],[1,-2],[-1,-2],[0,-1],[0,-3],[1,-4],[4,-2],[5,1],[4,1],[4,2],[3,3],[2,4],[0,4],[3,3],[6,1],[6,-1],[9,-2],[9,-4],[4,-1],[0,-1],[2,-7],[1,-2],[3,-2],[4,0],[4,0],[-2,-3],[1,-4],[0,-3],[-6,-2],[-3,-1],[-5,-8],[-3,-1],[-5,-1],[-5,2],[-4,2],[-7,5],[-4,1],[-4,0],[-5,0],[-4,0],[-6,2],[-5,1],[-5,-1],[-9,-1],[-18,-7],[-10,-2],[-3,-3],[-1,-4],[0,-5],[1,-1],[1,-1],[1,-2],[0,-1],[-1,-2],[-1,-2],[-1,-1],[0,-1],[-1,-2],[-11,-2],[-13,-8],[-7,-3],[-3,3],[-7,3],[-9,10],[-8,2],[-10,1],[-10,3],[-3,1],[-4,0],[-5,-3],[-2,-4],[-2,-5],[-7,-2],[-3,1],[-7,2],[-4,0],[-6,-1],[-3,0],[-3,3],[-14,-5],[-7,-1],[-7,1],[-4,3],[-2,0],[-2,0],[-4,-2],[-2,-1],[-4,1],[-3,-1],[-2,0],[-2,-3],[-2,0],[-1,1],[-3,-1],[-4,-1],[-2,0],[-2,1],[-1,4],[-1,3],[-3,4],[-6,7],[-3,2],[-8,1],[-3,1],[-13,10],[1,2],[0,5],[1,2],[1,1],[1,1],[1,2],[1,5],[1,2],[1,2],[2,1],[1,2],[-1,5],[1,2],[3,2],[5,1],[15,1],[11,5],[6,0],[3,1],[3,2],[2,1],[58,8],[5,1],[10,5],[30,6],[3,2],[2,2],[3,2],[4,1],[3,0],[19,-6],[2,0],[1,1],[4,2],[4,0],[6,0],[4,0],[7,3],[4,0],[4,-1],[4,1]],[[5105,4302],[-2,-2],[-1,2],[-5,-1],[-3,1],[-2,2],[2,3],[3,2],[3,-1],[2,-3],[3,-3]],[[5041,4324],[-1,-1],[-2,1],[-6,1],[-2,4],[-1,5],[-1,5],[-10,7],[-3,5],[6,2],[3,-2],[10,-14],[3,-2],[2,-1],[1,-2],[1,-3],[0,-3],[0,-2]],[[5293,4444],[-3,-3],[-3,2],[-1,3],[2,3],[5,6],[1,-5],[-1,-6]],[[4670,4608],[-3,-1],[-1,3],[2,7],[1,1],[0,3],[0,1],[3,2],[6,1],[3,1],[0,-1],[1,-3],[1,-4],[-2,-2],[-3,0],[-4,-1],[-4,-7]],[[4477,4931],[-7,-3],[-6,2],[1,4],[4,4],[4,3],[4,2],[5,2],[6,1],[5,0],[0,-1],[-11,-4],[1,-3],[1,-1],[-2,-1],[-1,-2],[-1,-2],[-1,-1],[-2,0]],[[6079,4555],[-3,4],[-4,3],[0,-18],[0,-109],[0,-110],[0,-110],[0,-110],[0,-109],[0,-110],[0,-110],[0,-109]],[[6072,3667],[-3,1],[-52,-3],[-5,0],[-4,2],[-4,2],[-4,2],[-2,1],[-5,0],[-2,1],[-2,2],[-2,1],[-4,2],[-17,13],[-4,3],[-9,2],[-4,2],[-1,1],[0,3],[-1,0],[-1,1],[-2,0],[-1,1],[-2,2],[-1,2],[0,3],[-1,3],[-3,7],[-11,14],[-1,4],[-9,15],[-6,5],[-17,10],[-5,6],[0,1],[5,2],[-1,4],[-4,4],[-4,2],[-2,1],[-5,3],[-2,1],[-1,0],[-2,1],[-2,0],[-1,-1],[-1,-1],[0,-2],[-7,3],[-42,48],[-5,10],[-6,9],[1,2],[4,2],[3,2],[2,6],[-3,5],[-5,5],[-3,6],[-1,8],[-1,3],[-4,4],[-5,2],[-3,2],[0,3],[24,11],[7,6],[5,7],[4,8],[1,9],[-1,29],[-1,3],[-27,55],[-20,37],[-15,28],[-4,4],[-7,5],[-10,11],[-1,3],[-2,3],[-40,33],[-16,13],[-8,4],[-7,7],[-6,3],[-8,6],[-7,3],[-7,6],[-7,2],[-11,7],[9,2],[9,-4],[76,-58],[21,-17],[11,-11],[15,-16],[7,-14],[14,-25],[2,0],[-2,9],[-12,24],[-2,8],[-1,4],[-26,27],[-4,3],[-8,3],[-4,3],[-5,6],[-41,31],[-5,1],[-13,9],[-2,2],[-9,5],[-3,2],[-1,3],[1,3],[3,1],[5,-1],[0,5],[2,4],[6,5],[4,3],[5,-1],[6,-6],[4,-1],[4,-1],[3,-2],[1,-4],[-1,-5],[-1,-3],[-1,-3],[2,-3],[2,-1],[2,0],[1,0],[-1,-4],[-2,-1],[-2,-2],[-2,-2],[1,-3],[3,-1],[12,-2],[3,0],[5,3],[1,4],[-1,5],[2,4],[3,5],[-1,3],[-15,12],[-3,2],[-8,1],[-3,2],[0,2],[2,1],[7,2],[1,1],[1,1],[3,1],[2,0],[12,-3],[2,1],[3,3],[0,2],[-1,3],[-3,2],[-1,3],[3,9],[0,3],[-3,1],[-3,-1],[-5,-5],[-3,9],[-7,6],[-10,2],[-9,1],[1,-1],[0,-1],[1,-1],[2,0],[-3,-3],[-10,-5],[-4,-3],[-4,-2],[-6,-1],[-6,1],[-4,1],[-10,-4],[-4,-3],[-2,-4],[1,-7],[2,-2],[10,-3],[4,-2],[1,-2],[-1,-2],[-5,-1],[-3,0],[-4,2],[-13,2],[-2,2],[-2,3],[-2,1],[-2,1],[-16,-1],[-2,-2],[3,-4],[4,-1],[15,0],[3,-1],[2,-1],[3,-3],[3,-2],[2,1],[3,1],[2,0],[4,-2],[-1,-2],[-5,-1],[-5,-1],[-2,0],[-4,2],[-3,0],[-2,-1],[-3,-2],[-3,0],[-4,1],[-8,4],[-5,1],[-10,-1],[-18,-4],[-5,-2],[-2,-3],[-1,-4],[-4,-3],[-8,-4],[-8,-4],[-21,-2],[-34,1],[0,2],[-3,-2],[-4,-2],[-5,-2],[-5,0],[-5,1],[-4,1],[-11,9],[-1,2],[2,3],[1,5],[1,4],[4,4],[4,2],[21,9],[7,4],[6,7],[5,8],[4,4],[3,2],[4,0],[4,2],[4,3],[3,2],[1,5],[-1,8],[1,5],[2,2],[1,1],[2,2],[1,2],[0,3],[-1,2],[-1,2],[-1,3],[0,4],[2,12],[2,4],[7,8],[1,4],[-1,9],[-4,18],[-1,9],[2,18],[1,5],[4,0],[4,-3],[2,-4],[1,4],[-1,5],[-2,4],[-4,2],[-3,1],[-2,1],[-1,2],[-1,3],[-1,1],[-6,1],[-2,1],[-1,3],[0,2],[0,2],[0,2],[-1,2],[-8,7],[-6,3],[-3,3],[-3,9],[-3,4],[-8,3],[-3,5],[-4,10],[-7,26],[-5,7],[-7,3],[-4,3],[0,2],[2,4],[-1,5],[-13,14],[-4,4],[-3,-3],[-1,-5],[-2,-4],[-8,-10],[-1,-4],[0,-4],[3,-4],[1,-2],[2,-2],[0,-2],[-8,-10],[-15,-13],[-1,-3],[-8,-22],[0,-3],[0,-6],[0,-3],[-2,-2],[6,-7],[-3,-5],[-2,-4],[-1,-6],[-2,-15],[0,-3],[-2,-3],[-4,-5],[0,-2],[-1,-2],[-4,-5],[-1,-2],[-1,-3],[-2,-10],[-6,-12],[-2,-7],[2,-6],[-5,-3],[-1,-3],[1,-7],[0,-7],[-1,-1],[0,-1],[-6,-2],[-6,-7],[-2,-1],[-2,0],[-12,3],[-8,5],[-4,3],[-3,0],[-6,0],[-3,0],[-4,2],[-1,1],[-9,0],[-4,-1],[-4,-1],[-5,-3],[-7,-6],[-4,-1],[-15,1],[-5,-1],[-7,-6],[-3,-6],[-5,-4],[-10,0],[-13,4],[-5,-1],[-13,-6],[-6,-6],[-9,-3],[-8,1],[-4,5],[-1,1],[-3,2],[0,2],[0,1],[2,4],[0,2],[2,2],[7,4],[3,2],[-1,2],[1,1],[4,2],[2,1],[1,1],[1,3],[5,8],[0,3],[-1,5],[-2,3],[-1,2],[-1,2],[3,3],[5,4],[1,3],[-2,4],[9,10],[1,4],[3,0],[14,-5],[9,0],[19,4],[9,0],[4,-1],[3,-2],[2,-2],[11,-2],[3,-2],[4,-2],[6,2],[6,6],[1,8],[0,9],[1,9],[4,6],[1,3],[0,2],[0,6],[0,2],[7,21],[-3,6],[-1,8],[-3,6],[1,10],[-1,4],[-4,4],[-4,-1],[-2,-3],[-4,-2],[0,2],[5,10],[2,3],[3,0],[1,0],[0,1],[1,3],[1,2],[2,5],[2,16],[0,5],[-1,5],[-1,5],[-2,5],[-5,6],[0,2],[1,1],[1,2],[2,1],[5,-3],[3,0],[3,3],[6,11],[1,3],[0,3],[0,2],[-3,5],[-1,2],[-1,1],[2,3],[3,3],[4,4],[4,4],[5,2],[2,2],[1,3],[0,2],[0,2],[-2,2],[-2,1],[-1,2],[3,2],[3,2],[5,6],[11,9],[2,1],[8,13],[5,7],[4,-1],[2,0],[13,16],[3,6],[6,3],[1,-2],[-2,-4],[1,-3],[6,2],[0,3],[0,6],[1,5],[0,6],[-2,3],[-2,6],[-3,7],[-3,3],[-2,3],[-2,3],[-2,4],[0,5],[1,3],[-1,3],[-4,5],[-6,6],[-1,8],[2,3],[2,4],[2,5],[3,3],[9,2],[12,8],[1,0],[2,-1],[2,0],[1,0],[2,3],[1,0],[3,-1],[2,-1],[2,-1],[3,2],[1,2],[0,1],[0,1],[-1,2],[1,5],[-1,2],[-1,3],[-1,4],[-2,3],[-2,2],[-2,1],[-5,0],[-2,1],[-2,2],[0,1],[-12,47],[0,3],[2,2],[5,3],[-9,7],[-1,1],[-1,2],[-1,0],[-2,1],[-2,1],[-2,0],[-1,0],[0,1],[0,1],[0,1],[-1,1],[0,1],[1,4],[0,2],[-1,2],[-5,4],[-2,3],[-2,3],[1,3],[3,3],[-2,1],[-2,1],[-2,0],[-1,1],[-1,2],[-1,4],[-1,1],[-2,-1],[-1,-3],[-1,-5],[-1,-3],[2,-4],[0,-5],[0,-10],[-2,-5],[0,-2],[6,-2],[2,-2],[2,-3],[1,-3],[1,-9],[0,-15],[0,-2],[-1,-2],[-1,-2],[-2,-6],[-2,-2],[-2,0],[-1,1],[-1,0],[-2,-2],[0,-2],[0,-3],[1,-2],[4,-5],[1,-2],[-2,-2],[-5,-1],[-3,1],[-2,0],[-4,2],[-7,6],[-4,0],[-5,-2],[-5,-3],[-3,-4],[0,-1],[0,-5],[0,-1],[-1,-2],[-17,-16],[-4,-3],[-5,-1],[-4,-3],[-1,-5],[-1,-5],[0,-4],[-2,-4],[-10,-16],[-1,-4],[-1,-17],[-2,-5],[-2,-4],[-9,-11],[-3,-4],[-11,-25],[-6,-9],[-5,-4],[-4,-1],[-6,-6],[-5,-2],[-11,-1],[-13,-3],[-2,1],[-2,0],[-2,2],[-1,1],[0,1],[-1,2],[-4,3],[-5,1],[-3,-2],[-1,-5],[-1,-2],[-2,-2],[-2,-1],[-2,-1],[-2,-1],[0,-2],[1,-2],[0,-2],[13,5],[4,-1],[-12,-6],[-3,-2],[-4,-3],[-5,0],[-5,0],[-5,-1],[-4,-2],[-3,-2],[-3,-2],[-6,-1],[-2,-1],[-3,-5],[-2,0],[-2,-1],[-5,-2],[-14,-5],[-3,-2],[-2,-2],[0,-1],[0,-5],[-9,-5],[-7,-6],[-3,-2],[-10,-2],[-4,-2],[-13,-10],[-2,-2],[-1,-2],[0,-5],[-1,-2],[-1,-2],[-3,-4],[-1,-2],[-2,-6],[-6,-5],[-13,-22],[-7,-5],[-13,-5],[-5,-6],[2,-3],[-1,-3],[-2,-2],[0,-2],[2,-3],[1,-2],[-1,-7],[-1,-7],[-3,-4],[-3,0],[-2,6],[-2,5],[-6,-1],[-11,-6],[-6,0],[-3,-1],[-3,-3],[-1,-4],[-2,-6],[-1,-3],[5,-6],[0,-4],[-2,-3],[-5,4],[-4,0],[-3,-2],[-2,-6],[0,-2],[-1,-4],[0,-3],[0,-2],[4,-4],[2,-2],[-2,-5],[-4,0],[-5,1],[-3,-3],[-1,-2],[-4,-3],[-1,-1],[2,-2],[2,-1],[7,-1],[4,1],[4,1],[4,2],[8,8],[1,0],[3,-1],[1,-1],[2,-2],[2,1],[2,3],[-1,5],[1,1],[2,2],[2,-1],[1,-1],[1,-3],[0,-10],[-2,-4],[-3,-4],[-3,-3],[-2,-2],[-1,-4],[6,-15],[0,-3],[1,-1],[2,-3],[-2,-3],[-5,-1],[-3,-2],[-4,2],[-4,9],[-3,2],[-2,1],[-6,2],[-3,1],[-1,1],[0,2],[-1,2],[-7,7],[-8,4],[-9,-1],[-8,-7],[-2,-4],[0,-1],[-1,0],[-2,-1],[1,-2],[1,-2],[0,-2],[-2,-1],[-11,0],[-2,1],[0,2],[0,3],[0,3],[-4,7],[-20,18],[-8,10],[-4,4],[-6,4],[-10,4],[-2,2],[-3,1],[-6,-2],[-3,1],[5,8],[0,3],[-4,4],[-7,6],[-8,5],[-5,1],[-4,-1],[-4,-1],[-4,-1],[-4,-1],[-4,-3],[-4,-2],[-2,2],[0,4],[7,8],[1,4],[1,5],[3,3],[3,2],[2,3],[1,2],[1,2],[1,2],[2,1],[2,-1],[-1,-2],[-1,-5],[0,-5],[3,-3],[4,-1],[15,-3],[3,-1],[-4,-2],[-1,-3],[1,-3],[2,-3],[7,-2],[1,-1],[-3,-3],[2,-2],[4,-3],[5,-2],[3,-2],[2,1],[5,2],[13,2],[1,3],[-5,1],[-9,1],[0,3],[1,4],[0,2],[-1,3],[-2,-1],[-2,-1],[-1,-1],[-1,-2],[-1,-2],[-2,0],[-2,2],[0,2],[-1,3],[0,2],[-1,1],[0,2],[0,2],[3,2],[1,2],[0,3],[0,2],[-2,5],[-5,6],[-1,3],[-3,30],[-4,11],[-6,10],[-7,0],[-5,4],[-1,2],[-2,3],[4,0],[4,2],[1,3],[-1,2],[1,3],[0,2],[-1,2],[0,2],[0,10],[-2,4],[-3,4],[-6,7],[-6,13],[-2,2],[-5,1],[-4,2],[-16,16],[-13,11],[-13,8],[-2,2],[-5,3],[-1,1],[-4,5],[-1,2],[-7,3],[-2,1],[3,2],[-2,4],[1,4],[2,5],[2,4],[-1,10],[-1,4],[-1,5],[-7,14],[-2,9],[-3,4],[-8,6],[-7,8],[-2,1],[-6,2],[-2,2],[-2,3],[4,2],[5,0],[3,0],[-1,3],[-2,4],[-2,5],[-3,2],[-5,0],[-14,4],[-5,0],[-3,-3],[1,-4],[4,-2],[6,1],[2,-1],[1,-2],[1,-2],[2,-2],[2,-1],[1,-2],[-2,0],[-2,-1],[-1,-1],[-2,-2],[-5,7],[-4,2],[-10,2],[-14,8],[-7,1],[-5,-2],[-4,-2],[-5,-1],[0,1],[-2,2],[-3,2],[-1,-2],[0,-3],[0,-3],[-1,-2],[-3,-1],[-12,9],[-2,4],[0,4],[-1,4],[-5,11],[-2,2],[-2,2],[-5,0],[-6,-1],[-3,1],[-2,3],[3,2],[8,1],[2,3],[1,4],[-2,4],[-3,4],[-3,1],[-3,0],[-1,-1],[-1,-1],[-1,-1],[-2,1],[-4,2],[-8,1],[-3,1],[-2,4],[1,1],[3,4],[2,1],[6,4],[2,2],[1,5],[-1,6],[-4,6],[-8,10],[-1,2],[2,3],[3,0],[6,-1],[17,-1],[5,-1],[-3,-3],[-1,-2],[-1,-3],[0,-2],[0,-3],[0,-2],[1,-2],[3,-1],[2,1],[1,5],[1,3],[3,3],[4,3],[1,2],[2,2],[1,4],[3,5],[0,4],[-5,16],[-4,8],[-6,6],[-7,7],[-10,8],[-4,1],[-3,0],[-2,0],[-2,-2],[-2,-1],[-1,-1],[-5,2],[-2,1],[-4,-2],[-3,-4],[-3,-3],[-2,-2],[-6,1],[-4,1],[-3,-1],[-5,-4],[-1,-2],[0,-2],[-2,-1],[-3,-1],[-2,0],[-3,0],[-1,2],[-1,2],[0,1],[2,3],[0,1],[1,0],[-1,3],[0,1],[-1,7],[1,1],[1,4],[3,5],[3,3],[2,-3],[1,-2],[5,0],[3,3],[1,4],[-2,3],[-7,7],[-1,4],[-2,3],[-10,8],[-4,6],[-1,1],[-3,-1],[-2,-1],[-2,-2],[-1,-1],[-3,0],[-1,2],[-1,2],[0,6],[-1,1],[-1,0],[-5,2],[-5,1],[-1,1],[-3,1],[0,1],[1,1],[0,2],[-1,3],[-2,0],[-2,1],[-2,1],[0,2],[1,1],[2,2],[1,2],[-2,2],[-5,2],[-6,1],[-4,1],[-4,-2],[-1,-4],[0,-5],[-2,-4],[-2,-2],[-2,0],[-10,4],[-2,2],[-2,1],[0,5],[-3,1],[-5,-4],[-3,0],[-2,0],[-2,-1],[-1,-3],[1,-2],[2,-1],[5,0],[5,-3],[3,-3],[1,-2],[-4,-2],[-2,1],[-4,2],[-2,1],[-1,-1],[-1,-2],[-2,-1],[-2,-1],[-12,1],[-6,2],[-5,2],[-5,-6],[-2,-1],[-2,1],[-4,3],[-4,2],[-5,1],[-2,1],[-3,-1],[-4,-2],[-1,0],[-2,0],[0,1],[-1,1],[-2,3],[-17,15],[-4,2],[-5,1],[-2,-1],[-2,-2],[-1,-1],[-3,1],[-1,1],[0,3],[-1,3],[-3,2],[-4,1],[-14,10],[-6,6],[-9,7],[-5,1],[-5,1],[-11,-1],[-10,1],[-15,3],[-5,0],[-11,-2],[-4,-1],[-4,-2],[-3,-2],[-2,-4],[1,-3],[3,-3],[2,-3],[-2,-1],[-2,0],[-5,2],[-4,1],[-5,1],[-5,-1],[-11,-4],[-10,-1],[-10,1],[-8,4],[-7,5],[-12,13],[-6,6],[-34,18],[-30,21],[-54,27],[-41,17],[-36,11],[-9,1],[-10,-4],[-21,-14],[-35,-10],[-9,-1],[-20,0],[-33,5],[-51,0],[-9,2],[-24,0],[-5,-1],[-12,-3],[-29,1],[-42,-6],[-46,-2],[-15,-4],[-4,0],[-19,0],[-12,-3],[-5,0],[-14,0],[-4,0],[-14,-5],[-3,0],[-7,0],[-20,-2]],[[5430,6317],[81,0],[81,0],[81,0],[81,0],[82,0],[81,0],[81,0],[81,0],[0,-83],[0,-82],[0,-82],[0,-83],[0,-82],[0,-83],[0,-82],[0,-82]],[[7268,3516],[9,-2],[10,2],[5,0],[5,-2],[2,1],[2,0],[2,0],[2,-1],[-1,-2],[-1,-1],[-2,0],[-13,0],[-2,-1],[-2,-4],[-2,-1],[-4,0],[-5,2],[-4,2],[-4,3],[-1,4],[4,0]],[[7019,3566],[1,-1],[2,-2],[1,-3],[0,-3],[-2,-2],[0,1],[0,1],[-1,1],[-6,4],[-6,3],[-6,1],[-7,-1],[-2,-1],[-2,-1],[-1,-1],[-2,1],[-4,2],[-1,0],[-3,0],[-7,-1],[-3,0],[1,2],[8,5],[4,5],[3,2],[3,1],[13,1],[2,1],[2,0],[1,0],[3,-1],[1,-1],[2,-1],[1,-1],[-2,-1],[-1,0],[2,-4],[1,-1],[-1,-1],[1,-1],[1,-1],[3,0],[1,0],[1,-1],[-1,-1]],[[7024,3609],[3,0],[10,2],[4,0],[2,-1],[2,-2],[7,-8],[-1,-1],[-4,-1],[-9,0],[-3,-1],[-8,-8],[-5,-3],[-7,2],[-2,1],[-6,3],[-1,2],[0,3],[-2,4],[6,8],[-1,1],[-1,2],[0,2],[2,1],[2,0],[1,-1],[1,-1],[1,-1],[9,-3]],[[8022,3788],[-5,-5],[-12,-4],[-25,-1],[1,0],[1,2],[0,1],[-1,1],[3,4],[-1,2],[-2,-1],[-3,-3],[-2,1],[-9,2],[9,-12],[1,-3],[-2,-3],[-7,-5],[-3,-7],[-7,-9],[-3,-2],[-11,-2],[-1,-2],[-1,-2],[-2,-2],[-4,-1],[-10,-1],[-4,-2],[-1,-1],[-2,-4],[-2,-1],[-2,-1],[-30,0],[-9,-3],[-6,-5],[-1,1],[-1,2],[-1,2],[0,2],[-1,0],[-17,0],[-5,1],[-4,2],[-9,-3],[-32,0],[-9,-1],[-25,0],[-5,-2],[-6,-3],[-3,-1],[-26,3],[-64,-3],[-38,-7],[-46,-14],[-35,-15],[-36,-21],[-42,-30],[-47,-39],[-21,-17],[-21,-21],[-20,-14],[-2,-1],[-1,-1],[-7,-9],[-2,0],[-1,2],[3,3],[-4,1],[-30,-5],[-11,1],[-5,-1],[-9,-5],[-5,-1],[-5,1],[-5,0],[-10,-2],[-6,-2],[-2,-3],[-2,-1],[-5,3],[-4,4],[-1,1],[-4,2],[-20,-2],[-4,-1],[-3,-2],[-9,-9],[7,-6],[1,-2],[2,-3],[2,-2],[1,-1],[4,1],[1,-1],[0,-1],[0,-2],[0,-1],[0,-3],[0,-2],[1,-3],[3,-1],[-1,-4],[2,-3],[3,0],[4,1],[3,3],[4,5],[4,3],[3,0],[4,0],[2,0],[1,2],[0,2],[0,2],[1,3],[2,3],[4,3],[3,-1],[3,-4],[-2,-3],[0,-3],[0,-7],[1,-2],[0,-1],[1,-2],[1,-2],[0,-1],[0,-1],[0,-1],[0,-2],[-1,-1],[-3,-2],[-2,-2],[-1,-4],[-1,-2],[-2,-7],[0,-3],[0,-1],[2,-1],[2,0],[2,1],[1,-1],[3,-8],[-1,-1],[-3,-1],[-3,-1],[-3,-2],[0,-2],[1,-2],[-1,-4],[-2,-2],[-4,-2],[-3,0],[-3,1],[-7,2],[-3,2],[-2,3],[-1,4],[2,1],[3,1],[1,3],[-2,2],[-9,4],[-2,2],[-5,7],[-3,13],[-15,15],[-20,11],[-16,-2],[-2,-4],[0,-4],[-1,-7],[-2,-1],[-12,-1],[-3,0],[-2,2],[-4,15],[-9,15],[-7,9],[-12,10],[-2,3],[6,-2],[9,-6],[6,-1],[-5,7],[-5,4],[-7,2],[-9,1],[-8,-2],[-12,-7],[-9,0],[-6,4],[-9,15],[-4,3],[-2,1],[-12,5],[-12,2],[-4,1],[0,2],[5,1],[5,2],[3,3],[-3,3],[2,3],[1,3],[-1,4],[-2,3],[7,3],[2,0],[2,-1],[2,-1],[1,-1],[5,1],[3,3],[2,3],[2,1],[4,2],[-1,3],[-3,4],[-4,2],[-1,1],[0,2],[2,4],[-2,2],[-3,4],[-6,8],[-2,3],[-4,1],[-4,0],[-10,-1],[-8,0],[-2,-1],[-1,-2],[-1,0],[-3,2],[-4,1],[-5,0],[-4,-2],[2,-3],[-1,-2],[-2,-2],[-2,-2],[-2,-5],[-2,-1],[-2,-1],[-2,-2],[0,-3],[3,-3],[1,-2],[1,-6],[1,-6],[-20,3],[-5,-1],[-2,-2],[-1,-2],[-2,-3],[-7,-2],[-2,-2],[-3,-6],[2,-1],[-5,-1],[-15,-1],[-2,-3],[-5,2],[-7,4],[-35,29],[-3,2],[-5,1],[-3,1],[-1,2],[1,2],[2,-1],[2,-1],[7,-2],[5,-2],[7,-7],[5,-1],[10,0],[9,1],[13,6],[6,1],[3,2],[1,2],[-1,2],[-1,2],[2,2],[5,3],[1,2],[1,3],[1,3],[2,2],[3,3],[3,4],[10,10],[2,8],[-1,8],[-3,8],[-5,6],[-3,1],[-6,2],[-3,2],[-1,1],[-5,8],[-3,9],[-2,4],[-4,4],[-6,3],[-5,0],[-1,-7],[-14,2],[-4,-1],[-1,-3],[-2,-4],[-1,-3],[-2,-1],[-4,-2],[-4,-1],[-3,0],[-3,-2],[-8,-6],[-1,-2],[-4,-3],[-24,-6],[-4,-3],[-2,-3],[-2,-2],[0,-2],[1,-1],[0,-2],[-2,-1],[-2,0],[-3,0],[-2,2],[-1,1],[-6,-2],[-13,0],[-5,-3],[-2,-6],[4,-2],[12,-1],[19,-4],[7,1],[6,2],[15,9],[11,-5],[5,-4],[-2,-6],[0,-1],[0,-3],[-1,-1],[-1,-1],[-3,0],[-1,0],[-4,-4],[-2,-3],[-2,-2],[0,-6],[-9,-1],[-18,0],[-2,-1],[-2,-1],[-2,0],[-2,0],[-3,0],[-5,2],[-2,0],[-5,0],[-4,-2],[-20,-12],[-11,-9],[-2,-1],[-5,0],[-3,-1],[-1,-1],[-3,-4],[-2,-1],[-11,-3],[-1,-1],[-2,-3],[-1,-1],[-10,-1],[-4,-3],[-12,-10],[0,-1],[0,-2],[1,-2],[-2,-3],[-3,-1],[-5,-1],[-3,-1],[-3,-4],[-5,-9],[-3,-2],[-2,-1],[-3,-2],[-3,-4],[-2,-2],[-21,-6],[-5,0],[-4,-2],[-3,-3],[-2,-4],[-3,-4],[0,-1],[0,-1],[-1,0],[0,-1],[-3,1],[-1,0],[-8,-4],[-2,-2],[-6,-6],[-3,-2],[-5,-1],[-4,1],[-7,6],[-3,2],[-1,0],[-2,3],[-1,1],[-8,3],[-8,4],[-4,2],[-5,0],[-21,-1],[-4,1],[-4,3],[-4,4],[-1,3],[-13,10],[-8,5],[-5,2],[-24,3],[-10,4],[-7,1],[-3,2],[-2,1],[-8,1],[-10,9],[-6,3],[-18,11],[-14,7],[-8,5],[-3,1],[-1,1],[-1,1],[-2,0],[-1,0],[-2,5],[0,1],[-1,1],[-3,0],[-2,-1],[-1,-1],[-1,-3],[0,-2],[-5,2],[-3,1],[-4,5],[-3,1],[-19,0],[-6,-2],[-3,-4],[-10,-3],[-10,2],[-19,7],[-23,15],[-8,3],[-2,0],[-8,0],[-3,1],[-5,2],[-22,2],[-9,-2],[-10,-3],[-9,-6],[-3,-6],[1,-3],[5,-5],[1,-3],[1,-3],[-2,0],[-5,1],[-2,0],[-1,1],[-2,0],[-1,-1],[-5,-4],[-1,-1],[-1,-3],[-1,-1],[-3,1],[-2,2],[-3,6],[-3,2],[-2,2],[-3,1],[-4,0],[-3,0],[-4,0],[-1,-2],[0,-2],[-1,-2],[-3,-1],[-3,1],[-4,2],[-2,1],[2,2],[3,4],[1,4],[1,1],[-1,4],[-1,3],[-4,3],[-35,26],[-17,10],[-32,13],[-3,2],[-1,0]],[[8783,6006],[3,-1],[10,1],[-5,-9],[-4,-11],[-11,-47],[-1,-1],[-4,0],[-3,0],[-2,-1],[-2,0],[-2,6],[0,3],[1,6],[1,1],[1,1],[1,1],[0,2],[0,2],[-2,3],[-1,2],[0,3],[3,7],[0,3],[0,3],[-3,9],[1,3],[5,6],[2,3],[0,7],[0,3],[2,1],[3,-1],[3,-2],[1,-2],[3,-1]],[[8770,6019],[-1,-1],[-3,4],[0,4],[-1,6],[-2,6],[-2,2],[-2,3],[-2,4],[-1,14],[1,13],[-1,5],[-1,4],[1,2],[4,2],[8,2],[4,3],[3,1],[2,-1],[2,-3],[-1,-5],[-9,-27],[-1,-9],[0,-11],[0,-2],[2,-6],[1,-3],[-1,-3],[0,-4]],[[8678,6464],[-2,-2],[-7,9],[-2,4],[2,2],[7,-7],[2,-6]],[[8739,6594],[-1,-26],[1,-4],[3,-12],[3,-3],[2,-1],[8,-6],[2,-3],[1,-5],[-2,-4],[-2,-4],[-1,-3],[-1,-5],[-17,-38],[-23,-45],[-17,-45],[1,-5],[3,-7],[0,-8],[-4,-6],[-6,-3],[-8,10],[-4,5],[-1,4],[1,4],[-3,11],[0,5],[-6,2],[-3,6],[1,7],[3,3],[5,3],[2,7],[1,13],[2,3],[2,2],[2,1],[2,2],[3,7],[2,2],[2,6],[-3,12],[3,6],[-1,2],[-2,1],[-2,0],[-5,2],[-2,0],[0,1],[0,2],[2,3],[3,3],[24,15],[7,6],[6,7],[4,6],[4,8],[1,8],[-2,9],[-4,7],[-6,9],[-7,7],[-5,-1],[12,15],[2,0],[7,6],[8,4],[2,2],[1,-10]],[[8328,6786],[-1,-3],[-4,1],[-1,6],[-2,3],[-5,6],[-1,7],[0,1],[1,2],[1,2],[2,0],[1,-7],[1,-3],[5,-5],[2,-5],[1,-5]],[[8252,6877],[1,-1],[2,1],[2,0],[2,1],[2,-1],[0,-2],[0,-2],[1,-1],[4,-2],[9,-1],[2,-3],[2,-1],[4,-1],[2,-1],[-3,-3],[4,-1],[4,2],[3,5],[3,2],[0,-6],[-3,-10],[0,-4],[1,-6],[2,-6],[2,-4],[4,-3],[4,-2],[2,-7],[1,-6],[-1,-3],[-1,0],[-1,-1],[-1,-2],[-1,0],[0,-1],[-1,-1],[-1,-1],[-1,1],[-7,-1],[-2,0],[-2,0],[-2,2],[-2,3],[-3,3],[-2,2],[-2,8],[-3,4],[-9,11],[-6,4],[-2,2],[-3,5],[-7,9],[-5,7],[-4,4],[8,3],[1,1],[0,1],[-1,2],[2,2],[2,-1]],[[8239,6938],[2,-1],[1,0],[0,-2],[-1,-1],[-2,1],[-2,0],[-1,-1],[-3,0],[-1,-1],[-1,0],[-1,1],[0,2],[0,1],[0,1],[1,0],[2,0],[1,0],[1,3],[1,1],[1,0],[1,0],[1,-1],[-1,-1],[1,-2]],[[8223,6960],[2,-2],[-1,-1],[-2,1],[-1,0],[-2,0],[0,2],[1,3],[1,0],[1,0],[0,-1],[1,-2]],[[7969,7101],[-1,-2],[-2,2],[-1,1],[1,2],[1,3],[-1,2],[-1,2],[1,2],[1,5],[2,3],[1,0],[3,-2],[4,-4],[-2,0],[-1,-2],[0,-2],[0,-3],[-5,-7]],[[8149,7131],[-1,-3],[-2,-1],[-2,-1],[-1,-1],[0,-2],[-1,-1],[-2,-1],[-1,-1],[-4,-2],[-3,2],[-1,3],[3,3],[-3,3],[-1,0],[-1,-1],[-1,0],[-1,-1],[2,4],[3,4],[2,5],[-1,3],[-1,2],[-1,2],[0,1],[3,1],[3,-1],[1,-2],[1,-2],[2,-2],[1,-2],[0,-2],[0,-2],[2,-1],[1,0],[2,-1],[1,-2],[1,-1]],[[8029,7173],[4,-1],[1,0],[1,0],[1,-1],[-1,0],[-4,0],[1,-2],[-1,-1],[-9,-7],[-5,-2],[-2,0],[-1,2],[0,2],[4,3],[1,0],[4,3],[4,1],[1,1],[0,1],[1,1]],[[8008,7148],[-5,-2],[-2,1],[0,2],[1,2],[0,2],[-1,2],[-1,1],[-1,1],[0,3],[0,4],[1,6],[2,4],[3,3],[-1,2],[1,3],[2,3],[2,1],[-1,-7],[0,-2],[1,-4],[3,-4],[0,-3],[0,-6],[-1,-6],[-3,-6]],[[8001,7195],[-3,-3],[-1,1],[-3,0],[1,2],[2,0],[1,0],[0,1],[1,1],[2,1],[1,0],[1,-1],[-1,-1],[-1,-1]],[[8060,7202],[2,-1],[1,0],[1,1],[1,-1],[2,1],[1,-2],[-1,-1],[-1,-1],[1,-1],[-4,-2],[0,2],[0,2],[-3,1],[0,2]],[[8107,7256],[-2,-4],[-1,-4],[-2,-2],[-4,0],[-7,5],[0,1],[5,2],[3,0],[2,-2],[6,4]],[[8094,7270],[-1,-4],[-1,1],[-1,1],[-1,-2],[0,-1],[-2,0],[-1,1],[-2,2],[-2,0],[-1,0],[-1,-2],[-1,2],[0,1],[1,2],[1,1],[-1,2],[0,1],[0,3],[1,0],[3,-3],[5,-2],[4,-3]],[[7985,7282],[-2,-2],[-1,2],[0,-1],[-1,1],[2,2],[1,0],[1,0],[0,1],[2,0],[0,-1],[1,-2],[-3,0]],[[7960,7342],[-1,0],[-1,2],[-1,2],[-1,0],[2,3],[0,-2],[2,0],[1,-2],[0,-1],[0,-1],[-1,-1]],[[8008,7410],[-2,0],[0,2],[-1,2],[3,0],[0,-1],[1,-2],[-1,-1]],[[7905,7428],[-1,-1],[0,1],[1,2],[0,1],[-1,2],[-1,1],[1,1],[2,1],[1,0],[2,0],[1,-1],[1,-2],[0,-1],[-1,-1],[-2,-2],[-1,-1],[-2,0]],[[7899,7437],[1,0],[1,-1],[1,-4],[0,-1],[-1,1],[-2,0],[-1,1],[-1,0],[-1,0],[0,1],[0,1],[-1,0],[1,1],[2,1],[1,0]],[[7946,7445],[0,-2],[-1,-2],[-2,-1],[-2,0],[-3,1],[-1,3],[2,1],[2,0],[1,1],[0,1],[0,1],[2,0],[2,-2],[0,-1]],[[7873,7456],[0,-3],[-2,2],[-1,-1],[-2,-1],[0,1],[1,2],[-1,0],[-2,1],[1,1],[3,1],[1,0],[1,-1],[1,-2]],[[7877,7459],[-1,-1],[-1,1],[-2,0],[-2,0],[0,1],[-1,2],[3,2],[2,-2],[1,-1],[1,-2]],[[7914,7470],[-2,2],[0,3],[1,-1],[2,-1],[1,-2],[-2,-1]],[[7847,7486],[-1,-1],[-1,0],[0,-1],[-2,-1],[-2,-2],[0,2],[1,0],[1,2],[0,2],[1,0],[0,2],[1,-1],[2,-2]],[[7831,7528],[-2,-3],[-2,-3],[-4,-3],[-1,1],[-2,1],[0,2],[0,2],[1,1],[3,0],[2,1],[3,4],[1,4],[0,4],[1,4],[1,-4],[0,-4],[2,-2],[2,-3],[-5,-2]],[[7785,7548],[-1,-1],[-1,1],[0,1],[-1,0],[-1,3],[0,1],[-1,1],[0,1],[0,1],[0,2],[0,1],[0,1],[-1,1],[1,0],[0,4],[1,0],[1,0],[0,-2],[-1,-4],[1,-3],[2,-2],[1,-2],[1,-2],[0,-1],[-1,-1]],[[7775,7579],[1,-2],[3,2],[-1,-3],[0,-1],[-2,-2],[-1,-1],[-1,3],[0,1],[1,0],[-1,1],[0,1],[1,1]],[[7821,7575],[5,-4],[1,-2],[-1,-3],[-2,1],[-2,1],[-2,4],[-3,-7],[-2,-2],[-3,4],[-3,-1],[-2,-2],[-2,0],[0,9],[-4,-2],[-1,-1],[-2,0],[-2,1],[-1,1],[2,2],[6,6],[1,3],[-4,1],[2,5],[1,5],[1,5],[4,3],[0,-3],[4,-6],[0,-2],[0,-6],[1,-2],[4,-1],[0,-1],[4,-6]],[[7807,7622],[-2,-4],[-4,-4],[-2,-4],[0,-1],[3,-4],[0,-2],[-1,-1],[-7,-6],[1,4],[0,2],[-1,-1],[-1,-1],[0,1],[-1,1],[-1,0],[-1,-3],[-2,1],[-1,1],[-1,2],[-1,2],[2,3],[6,7],[-1,1],[-1,1],[0,1],[0,2],[3,2],[1,-1],[1,-1],[1,0],[3,1],[1,1],[1,2],[1,2],[4,-4]],[[7961,7629],[0,-1],[-1,1],[1,0]],[[7698,7629],[-2,-4],[-1,0],[-1,1],[-1,0],[-1,0],[0,7],[0,3],[-1,2],[1,5],[5,-4],[2,-5],[-1,-5]],[[7351,7831],[0,-3],[0,-5],[-1,-2],[-1,-2],[-2,2],[-8,-5],[-4,3],[-2,3],[-1,2],[-1,2],[1,2],[2,1],[3,0],[3,0],[2,3],[1,-1],[1,-1],[4,-1],[1,3],[1,0],[1,-1]],[[7299,7913],[4,-2],[7,0],[0,-2],[-2,-3],[-3,0],[-2,-1],[-3,1],[-3,1],[-2,0],[-3,0],[-4,-1],[-3,1],[0,4],[3,6],[0,3],[-2,3],[1,2],[3,-2],[2,-2],[2,-1],[2,-3],[3,-4]],[[7213,8025],[2,-2],[9,0],[3,-1],[-1,-3],[-3,-4],[-1,-4],[0,-4],[1,-4],[5,-6],[2,-1],[4,0],[1,-1],[1,-3],[-1,-1],[-2,-1],[-2,0],[1,-2],[5,-2],[1,-2],[0,-2],[-1,-1],[-2,-1],[-1,0],[-3,-8],[-2,-3],[-4,-3],[-4,2],[-8,2],[-3,2],[-2,5],[-2,12],[-1,3],[-6,9],[-2,2],[-9,6],[-3,2],[-2,2],[-1,3],[1,5],[5,-1],[11,-4],[10,-3],[1,4],[-1,7],[2,7],[2,-6]],[[7200,8035],[-3,-1],[-3,1],[1,2],[0,1],[1,3],[1,0],[2,-1],[2,-1],[1,-2],[-2,-2]],[[7199,8083],[0,-2],[-2,3],[-3,0],[-1,2],[-2,1],[1,2],[1,1],[2,-1],[3,-3],[1,-3]],[[5769,8272],[-3,-1],[-7,-1],[-1,0],[-1,-2],[-1,-1],[-3,0],[-2,1],[0,2],[-1,1],[0,1],[-4,0],[-3,-2],[-3,-3],[0,-4],[-2,0],[0,1],[-1,1],[0,1],[-3,6],[1,3],[4,1],[4,4],[6,8],[3,4],[1,2],[0,3],[3,-1],[9,-7],[3,-4],[-2,-3],[1,-2],[3,-2],[1,-2],[-2,-4]],[[7162,8308],[-3,-2],[-2,3],[2,1],[2,1],[1,-1],[0,-2]],[[5671,8325],[-2,-1],[-1,1],[-1,2],[0,2],[0,2],[-2,1],[4,2],[6,1],[5,0],[0,-3],[-2,-2],[-5,0],[-2,-2],[0,-3]],[[5797,8415],[-1,-2],[0,-1],[4,-1],[2,2],[1,3],[2,0],[1,-2],[0,-4],[0,-4],[-1,-3],[-1,1],[-1,2],[-1,1],[-2,-2],[-1,-2],[1,-2],[0,-2],[-1,-1],[-2,1],[-4,1],[-5,0],[-4,-2],[-4,-2],[-2,-4],[-2,3],[-4,8],[-2,1],[0,1],[-2,2],[-2,1],[-1,-1],[-1,-1],[-4,-5],[-1,0],[-6,0],[-1,-1],[-1,-2],[2,-2],[3,-1],[2,0],[2,-1],[0,-3],[-2,-2],[-3,1],[-2,2],[-2,0],[-2,-1],[-2,-2],[1,-7],[1,-2],[-1,-1],[-3,-4],[0,-1],[0,-1],[-1,-3],[-2,-2],[-2,-1],[-2,1],[-3,4],[-3,1],[-2,-2],[-3,-8],[-3,-2],[-4,-1],[-5,-4],[-3,-1],[-14,0],[-3,0],[-1,3],[-7,8],[-2,2],[1,-4],[0,-7],[0,-4],[-3,0],[-1,-3],[-3,-2],[-1,0],[-1,6],[-1,4],[0,3],[1,1],[1,2],[2,2],[0,3],[1,5],[1,4],[2,4],[2,3],[5,4],[2,3],[1,4],[0,2],[2,2],[2,1],[2,0],[2,1],[4,6],[2,2],[5,2],[4,1],[10,0],[25,6],[12,6],[8,2],[5,-1],[2,-1],[1,-3],[3,-3],[3,-1],[3,-1],[9,-1],[-1,-1]],[[7046,8803],[-1,0],[-3,1],[-1,0],[-1,2],[1,1],[1,2],[-1,1],[1,1],[1,0],[2,-1],[2,-2],[0,-2],[0,-2],[-1,-1]],[[6939,8844],[2,-4],[-1,0],[-1,1],[-2,0],[-2,1],[1,2],[1,-1],[2,1]],[[6788,8910],[0,-1],[-4,1],[-4,2],[-1,2],[2,1],[1,2],[2,1],[2,-1],[2,-3],[1,-3],[-1,-1]],[[6773,8913],[0,1],[0,1],[4,4],[-1,4],[1,1],[1,0],[1,-1],[1,0],[1,-1],[2,0],[2,-1],[-1,-1],[-2,0],[-2,-1],[-2,-1],[-1,-1],[-2,-1],[-2,-3]],[[6844,8926],[-2,-2],[-3,2],[3,2],[2,-2]],[[6601,9330],[0,-2],[-2,0],[0,1],[2,1]],[[6571,9394],[-1,0],[-1,1],[-1,1],[0,2],[2,-1],[1,-3]],[[6615,9409],[-1,-1],[0,3],[1,-1],[0,-1]],[[6732,9481],[1,-1],[-1,0],[0,1]],[[5430,8395],[13,-16],[9,-4],[11,-10],[7,-4],[7,-3],[4,-2],[5,-1],[2,0],[2,-1],[2,-3],[1,-1],[4,-1],[13,1],[7,-3],[9,-4],[10,-4],[12,4],[22,0],[2,-1],[6,-6],[2,-1],[3,-1],[7,-3],[3,-2],[11,-2],[8,-5],[6,-1],[22,-2],[8,-2],[6,-4],[6,-14],[6,-5],[14,-7],[-3,-7],[0,-12],[2,-11],[3,-8],[10,-18],[6,-8],[8,-5],[8,-3],[19,-1],[8,-2],[2,-2],[6,-4],[7,-4],[2,-2],[3,-3],[10,-6],[9,-10],[5,-4],[6,-2],[6,0],[18,-5],[5,-1],[4,-2],[2,-2],[20,-7],[2,-3],[5,-8],[8,-7],[2,-1],[25,-2],[27,3],[35,7],[4,2],[2,2],[2,2],[5,1],[10,0],[3,2],[3,2],[6,5],[2,1],[5,0],[2,2],[2,1],[6,4],[7,6],[3,2],[10,2],[2,1],[0,3],[2,4],[3,2],[5,2],[5,2],[4,0],[3,2],[2,5],[6,16],[2,19],[3,8],[1,2],[5,5],[1,7],[1,2],[1,3],[2,14],[0,4],[-2,4],[0,4],[2,4],[20,25],[7,19],[2,1],[4,0],[2,0],[1,2],[5,6],[11,12],[2,4],[1,3],[3,7],[2,15],[2,4],[4,-1],[5,9],[2,5],[0,5],[2,4],[0,3],[-1,1],[-2,1],[0,2],[0,4],[1,3],[5,7],[1,3],[1,5],[4,9],[1,4],[0,9],[1,2],[2,3],[1,4],[12,22],[1,4],[-3,5],[-8,22],[0,2],[1,3],[4,3],[1,3],[0,8],[7,45],[11,37],[18,42],[1,4],[0,8],[1,3],[2,3],[3,1],[-1,4],[2,3],[4,3],[2,3],[0,4],[-1,4],[1,3],[5,0],[-1,4],[0,4],[2,5],[0,5],[-1,5],[-1,4],[-2,3],[-3,3],[0,2],[1,2],[-5,6],[-2,4],[-13,57],[0,14],[-1,4],[-3,8],[-1,4],[0,9],[3,9],[12,34],[2,9],[1,10],[-1,10],[-3,9],[-5,6],[-6,6],[-11,16],[-4,18],[2,19],[11,45],[5,11],[1,5],[1,2],[7,8],[2,4],[6,15],[1,5],[2,-1],[3,-1],[2,1],[2,1],[-3,4],[1,3],[2,3],[1,3],[1,2],[2,4],[0,2],[0,2],[-1,3],[0,2],[-1,1],[0,1],[-2,1],[-2,1],[-1,1],[-1,2],[-1,1],[-2,2],[-1,3],[-3,6],[0,3],[-2,15],[-2,9],[-1,1],[-1,1],[-2,1],[0,2],[0,2],[4,7],[3,4],[2,4],[1,3],[3,-3],[3,2],[4,4],[8,4],[5,5],[4,5],[1,4],[1,3],[5,14],[1,6],[2,4],[1,2],[3,0],[0,-2],[-1,-6],[1,0],[3,5],[4,-1],[3,-3],[3,-4],[2,-13],[0,-10],[1,-5],[1,-2],[2,-1],[6,-11],[0,4],[0,5],[0,4],[-3,8],[-2,9],[-2,3],[18,6],[4,4],[-5,-1],[-7,1],[-6,1],[-4,1],[-3,5],[-2,2],[-11,3],[-2,1],[3,3],[8,4],[5,4],[5,2],[2,1],[2,1],[3,0],[5,0],[-6,2],[-3,2],[-3,0],[-4,-4],[-3,1],[-3,0],[-8,-1],[-5,0],[-3,1],[-3,2],[-3,3],[-3,5],[-2,3],[-2,1],[-10,3],[9,6],[4,3],[-2,2],[-9,-1],[-4,1],[-4,3],[0,-1],[-1,-1],[0,-4],[0,-13],[1,0],[5,-1],[2,-1],[1,-2],[-3,0],[-5,0],[-9,-4],[-5,0],[-2,5],[1,3],[21,47],[3,14],[2,3],[4,1],[8,-3],[4,0],[2,1],[2,1],[-2,1],[-1,1],[-1,3],[0,2],[-1,0],[-1,-1],[-1,-2],[-2,-1],[-2,1],[-1,2],[1,3],[2,9],[4,8],[4,14],[6,10],[9,9],[9,3],[-2,-5],[-1,-3],[0,-4],[4,-13],[0,-4],[0,-5],[7,14],[3,1],[2,0],[10,-7],[3,7],[-1,2],[-4,1],[-3,7],[-1,2],[-3,1],[-2,0],[-2,0],[-2,1],[-1,7],[0,10],[5,19],[9,12],[0,2],[-1,4],[1,5],[26,81],[1,5],[-1,12],[1,5],[1,4],[3,7],[1,8],[0,19],[-3,18],[1,7],[5,5],[11,2],[1,-2],[2,2],[4,2],[5,1],[5,0],[5,1],[3,2],[6,7],[7,9],[2,3],[0,3],[4,10],[2,4],[3,3],[3,1],[9,-1],[1,1],[4,3],[1,0],[1,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[1,-2],[3,-1],[8,-4],[3,-3],[0,-1],[-1,-2],[-1,-3],[-1,-1],[-2,-2],[-3,-1],[-2,-1],[-1,-2],[-2,-5],[-1,-2],[-2,-1],[-4,-1],[-2,-1],[-1,-6],[1,-5],[0,-5],[-3,-5],[5,1],[4,4],[2,4],[1,5],[2,3],[6,1],[5,-1],[2,-3],[2,-10],[1,-1],[2,1],[2,-1],[2,-4],[-2,-7],[2,-4],[3,4],[4,3],[6,0],[3,-1],[1,-3],[2,-6],[1,-2],[2,-3],[2,-3],[3,-7],[1,-6],[0,-7],[2,-5],[1,-1],[-1,-2],[-2,-3],[-1,-5],[1,-7],[1,-7],[4,-4],[2,1],[3,-3],[1,-4],[1,-4],[1,-2],[3,-4],[0,-3],[0,-2],[-1,-2],[-3,-2],[-5,-9],[-2,-6],[2,-2],[2,-2],[1,-5],[-1,-10],[1,-2],[3,-4],[0,-3],[2,-28],[-2,-19],[1,-4],[3,-3],[11,-9],[3,0],[8,-7],[3,-2],[7,1],[4,1],[8,4],[6,1],[4,-2],[11,-11],[2,0],[4,0],[5,2],[3,-1],[2,-2],[-2,-3],[-3,0],[-5,-1],[-21,-33],[-1,-1],[-2,-1],[-1,-1],[-1,-4],[1,-1],[1,-6],[0,-3],[-1,-2],[-1,-1],[-1,-2],[1,-1],[1,-1],[1,-1],[-2,-4],[-1,-4],[0,-10],[2,-1],[4,-2],[7,0],[8,1],[2,-1],[5,-3],[1,0],[9,-7],[1,-1],[1,-1],[2,-4],[1,-3],[0,-14],[2,-5],[2,-4],[3,-3],[3,-2],[9,-2],[3,-1],[3,-1],[3,-3],[6,-5],[0,-1],[-5,-7],[-2,-4],[2,-2],[0,-1],[-7,-11],[0,-4],[-3,-12],[0,-13],[-1,-4],[4,6],[2,-1],[3,-2],[3,0],[2,1],[3,3],[2,0],[2,-2],[3,0],[6,0],[3,2],[3,2],[4,2],[-11,-20],[4,-7],[0,-9],[-2,-18],[5,-27],[0,-29],[1,-2],[1,-2],[8,-6],[0,-2],[3,-4],[1,-2],[1,-3],[0,-2],[-3,-14],[0,-4],[4,-1],[-2,-4],[-6,-13],[-2,-7],[-1,-13],[-3,-9],[-1,-4],[1,-3],[4,-8],[1,-5],[1,-2],[7,-10],[1,-2],[0,-6],[0,-3],[1,-2],[1,-2],[2,-2],[13,-11],[2,-2],[2,-13],[-1,-4],[3,-5],[0,-21],[9,-28],[8,-14],[4,-7],[6,-5],[3,-2],[3,-2],[3,-1],[4,-1],[8,-1],[2,-1],[1,-4],[2,3],[3,1],[5,0],[9,6],[8,3],[10,10],[4,3],[3,1],[4,3],[2,4],[2,4],[0,5],[0,6],[1,6],[3,2],[1,-1],[1,-2],[1,-1],[1,1],[1,0],[0,1],[1,1],[2,0],[3,-8],[1,-1],[3,-1],[2,0],[3,0],[2,-2],[30,13],[2,2],[4,10],[1,2],[1,0],[0,2],[0,3],[0,1],[2,0],[3,-2],[3,-1],[2,-2],[1,-2],[1,-1],[2,-2],[9,-13],[-2,-4],[0,-4],[-1,-9],[2,-5],[5,0],[4,2],[3,4],[1,-4],[-1,-5],[-2,-3],[-2,-2],[-1,-3],[1,-12],[1,-3],[1,-2],[6,-4],[1,-2],[3,-6],[1,-2],[5,-1],[9,2],[3,0],[4,-3],[2,-4],[3,-4],[5,-1],[14,-1],[4,-1],[1,-1],[1,-2],[0,-2],[1,-2],[1,-2],[4,-3],[-1,-1],[1,-11],[1,-2],[2,-2],[13,-9],[4,-5],[5,3],[5,-2],[5,-3],[5,-2],[3,-1],[4,-2],[3,0],[3,0],[5,1],[3,0],[-2,-6],[2,-4],[12,-15],[4,0],[4,1],[7,0],[-3,-6],[-16,-23],[-2,-4],[-3,-16],[1,-4],[3,-6],[1,-6],[2,-2],[3,-2],[3,0],[3,1],[2,2],[1,6],[4,-3],[2,-5],[-1,-4],[-9,-3],[-4,-3],[-1,-5],[4,-3],[-2,-2],[-1,-2],[0,-2],[0,-3],[-2,0],[-3,-2],[-1,-1],[-2,-4],[-1,-5],[0,-3],[3,2],[1,0],[3,-9],[1,-4],[-3,-2],[-1,-1],[0,-2],[1,-2],[1,-1],[0,-1],[8,-6],[1,-1],[2,-5],[0,-2],[0,-2],[-3,-5],[0,-1],[1,-1],[9,-18],[2,-3],[0,-3],[-1,-10],[0,-4],[1,-2],[1,-1],[1,-1],[0,-2],[-1,-3],[-3,-4],[-1,-3],[1,-4],[2,-3],[5,-4],[9,-12],[5,-8],[2,-7],[0,-9],[-5,-15],[-1,-7],[1,-1],[4,-2],[1,-2],[2,-5],[0,-3],[-2,-3],[-7,-7],[-3,-7],[0,-16],[-3,-8],[1,-2],[1,-2],[1,-2],[3,-1],[4,1],[3,-2],[2,-4],[1,-5],[1,-2],[8,-8],[3,-7],[4,-5],[1,-1],[0,-3],[3,-3],[2,-4],[11,-9],[2,-1],[5,-2],[2,-2],[1,-2],[1,-4],[1,-3],[2,-2],[5,-2],[2,-1],[4,-11],[3,-2],[4,-4],[0,-2],[0,-3],[-2,0],[-3,-1],[-2,-1],[-1,-3],[2,-2],[3,-2],[2,-4],[0,-1],[0,-4],[1,-1],[2,-1],[2,0],[1,2],[-2,4],[-1,4],[1,4],[1,1],[2,1],[6,6],[2,2],[4,-2],[2,-3],[3,0],[5,4],[1,2],[2,1],[1,1],[3,0],[4,-1],[0,-3],[-1,-2],[0,-1],[-1,0],[-2,-3],[-1,0],[0,-2],[2,0],[0,-2],[-2,-4],[-2,-2],[-1,-1],[-2,-2],[-4,-7],[-1,-3],[-1,-5],[0,-4],[1,-3],[4,-2],[2,-1],[8,-17],[2,-4],[0,-5],[1,-5],[1,-3],[7,-11],[6,-14],[3,-4],[4,-3],[2,-1],[1,-2],[-1,-10],[1,-13],[-2,-2],[3,-5],[6,-8],[6,-6],[2,-3],[1,-4],[-2,-3],[-5,-5],[-2,-3],[-1,-5],[1,-14],[-1,-1],[-3,-2],[-1,-3],[1,-1],[1,-1],[0,-2],[0,-3],[0,-1],[3,-4],[1,-3],[-2,-2],[-1,-8],[-1,-1],[1,-4],[-6,-14],[-11,-19],[-1,-7],[-2,-6],[-1,-3],[1,-3],[0,-3],[1,-3],[1,-3],[-1,-6],[3,-5],[16,-19],[4,-3],[3,-1],[7,0],[2,-1],[2,-2],[1,-3],[1,-7],[5,-15],[-1,-4],[4,1],[5,-1],[4,-2],[1,-1],[3,2],[3,0],[8,-2],[0,-10],[-2,-9],[-2,-8],[-6,-14],[-3,-26],[-1,-1],[0,-2],[-1,-2],[0,-2],[1,-3],[4,-5],[1,-2],[1,-1],[3,-2],[1,-2],[3,-6],[17,-12],[3,-3],[4,-7],[4,-4],[3,-2],[9,-2],[3,-3],[5,-4],[1,-3],[2,0],[2,0],[2,-1],[14,-8],[9,-3],[11,5],[3,-2],[4,-7],[6,-5],[3,-3],[2,-1],[5,-2],[5,-6],[7,-3],[8,2],[3,-1],[4,3],[7,7],[2,4],[1,4],[0,4],[-1,5],[1,0],[1,-4],[4,-4],[1,-4],[1,-1],[2,-2],[0,-2],[-1,-1],[-2,-7],[0,-2],[2,-4],[5,-6],[1,-2],[10,-13],[3,3],[4,0],[12,-3],[5,-2],[2,-1],[2,1],[5,2],[29,0],[6,4],[1,3],[-2,5],[-3,3],[-5,4],[-2,3],[1,2],[5,-2],[4,-6],[10,-25],[13,-15],[2,-3],[1,-6],[1,-6],[2,-5],[4,-5],[-1,-6],[2,-5],[0,-4],[-8,0],[4,-2],[2,-2],[5,-7],[15,-16],[8,-1],[14,-1],[-5,13],[-2,2],[1,2],[-1,15],[15,-5],[5,-5],[3,-20],[3,-6],[5,-5],[7,-5],[5,-2],[4,-1],[10,0],[0,1],[1,2],[0,3],[2,0],[1,0],[2,-1],[1,0],[2,1],[3,2],[3,-2],[6,-7],[2,-2],[2,-2],[14,-2],[13,-4],[5,0],[-2,-5],[2,-4],[6,-6],[-5,-2],[-4,-1],[2,-2],[1,-2],[-1,-2],[-2,-2],[5,-2],[3,-2],[5,-7],[1,-1],[2,-1],[8,-5],[6,-2],[1,-2],[-1,-4],[3,0],[4,0],[4,1],[2,2],[0,3],[-2,0],[-3,0],[-4,2],[2,2],[3,1],[3,0],[2,1],[2,3],[-1,2],[-2,2],[-2,1],[-2,1],[-2,3],[0,4],[2,2],[3,1],[2,-1],[3,-3],[3,-1],[6,0],[1,1],[3,3],[4,2],[1,-1],[1,-12],[1,-7],[3,-6],[6,-1],[-2,-3],[-1,-3],[2,-2],[4,0],[2,2],[0,3],[1,3],[1,3],[2,-2],[1,-2],[0,-2],[-2,-2],[5,2],[1,1],[0,-2],[0,-3],[-2,-2],[-2,-2],[4,-2],[2,-1],[-1,-1],[-1,-2],[0,-2],[0,-2],[9,3],[4,2],[4,-1],[-1,6],[6,-3],[5,-6],[-3,-4],[1,-2],[3,-3],[1,-1],[0,-2],[2,0],[2,0],[1,-1],[2,-5],[0,-3],[-1,-2],[-1,-4],[3,-7],[4,-4],[11,-7],[-5,-1],[2,-4],[4,-4],[2,-5],[-1,1],[-2,1],[-2,-1],[-2,-1],[-1,3],[-3,1],[-2,-1],[-1,-1],[-2,3],[-2,2],[-2,2],[-3,1],[1,2],[0,3],[0,3],[-1,2],[-1,1],[-3,2],[-2,0],[-2,0],[0,-1],[0,-2],[-1,-2],[-1,-2],[-2,-1],[-3,-1],[-4,1],[-1,1],[0,2],[-3,2],[-5,1],[1,-3],[3,-6],[1,-4],[-1,-5],[-4,-4],[-5,-3],[-5,0],[1,-4],[2,-3],[5,-5],[0,-1],[1,-3],[0,-1],[2,0],[3,0],[1,0],[1,-3],[0,-2],[-4,-5],[4,-2],[3,-7],[4,-2],[2,-1],[3,-5],[1,-2],[1,-1],[2,1],[2,0],[2,1],[3,-1],[1,-1],[1,-2],[1,-2],[1,-10],[0,-1],[-1,-1],[-1,-2],[-1,-2],[0,-2],[0,-2],[-1,-1],[-1,-2],[4,1],[3,3],[3,7],[3,-2],[2,-3],[3,-2],[3,-1],[7,2],[3,0],[1,-2],[5,-5],[3,-2],[1,1],[1,1],[1,1],[3,0],[3,0],[3,-2],[1,-4],[-4,1],[-4,1],[-2,-1],[2,-4],[1,-3],[-2,-3],[-1,-3],[4,0],[7,2],[4,0],[1,-3],[2,-2],[9,-1],[2,-2],[1,-4],[2,-3],[3,-2],[2,0],[1,-2],[6,-7],[0,-8],[-7,-12],[0,-9],[6,-12],[2,-2],[1,1],[2,4],[1,1],[2,0],[1,-1],[1,-2],[0,-1],[0,-1],[1,-1],[3,1],[0,-1],[2,-3],[0,-2],[-1,-1],[-1,-2],[2,-5],[4,-8],[-1,-1],[-2,-2],[-2,-1],[-2,0],[2,-3],[7,-1],[3,-2],[-4,-3],[-3,-2],[-4,-3],[-1,-5],[1,-6],[3,0],[9,7],[2,-3],[4,-2],[3,0],[2,0],[-1,-7],[1,-3],[3,-2],[1,-1],[0,-3],[3,-2],[5,2],[1,2],[3,6],[2,2],[2,-1],[1,-2],[1,-6],[-11,-11],[-1,-4],[1,-5],[4,-8],[2,-3],[1,-2],[0,-1],[-2,-3],[-2,0],[-2,-1],[-3,-2],[-1,-4],[0,-4],[2,-5],[3,-4],[2,-2],[1,-1],[1,-2],[1,-3],[-1,-2],[-1,-5],[0,-2],[1,-5],[2,-5],[8,-13],[1,-4],[1,-10],[1,-4],[8,-14],[-3,-3],[-1,-2],[0,-1],[4,-2],[2,-4],[1,-1],[5,-6],[-1,-2],[-3,-5],[-1,-1],[1,-1],[10,-4],[2,-1],[1,-1],[2,-3],[2,-4],[2,-2],[4,2],[1,-4],[1,-5],[-1,-8],[-1,-6],[-2,-3],[-3,-3],[-2,-4],[6,1],[8,4],[8,6],[4,4],[4,8],[2,2],[4,-2],[6,-7],[3,-4],[1,-4],[1,-2],[18,-15],[1,-2],[2,-7],[5,-7],[5,-6],[5,-2],[-6,20],[-14,33],[-4,5],[-2,5],[0,4],[5,-1],[-2,3],[-2,4],[-2,3],[2,4],[2,3],[4,10],[2,7],[2,3],[2,3],[3,1],[3,0],[8,3],[1,-1],[4,-2],[1,-1],[1,-2],[4,-10],[1,-4],[2,-2],[3,-2],[1,-1],[2,-1],[2,-1],[0,-3],[1,-2],[0,-2],[0,-1],[1,-2],[5,-3],[1,-3],[-3,-2],[4,-7],[4,-3],[18,-5],[3,-2],[6,-4],[4,-2],[6,-3],[4,-2],[2,-1],[4,-5],[3,-2],[3,-2],[12,-3],[4,-3],[16,-14],[2,2],[-4,3],[-3,7],[-2,6],[1,4],[0,1],[-7,6],[-3,12],[2,13],[5,10],[2,-2],[6,-3],[3,2],[4,-2],[2,-3],[-3,-2],[1,-2],[0,-1],[-1,-2],[-2,-1],[3,0],[2,-2],[2,-1],[2,-3],[2,2],[-2,3],[0,3],[0,4],[3,2],[1,-5],[1,-5],[2,-5],[2,-3],[2,-1],[6,-2],[2,0],[1,-1],[1,-3],[0,-2],[-2,-2],[-6,-7],[-4,-2],[-1,6],[-2,1],[-3,-2],[-1,-3],[4,-3],[-3,-6],[6,1],[3,-1],[0,-4],[0,-6],[1,-3],[2,-1],[2,1],[3,2],[0,3],[1,3],[0,6],[1,5],[2,1],[2,-3],[1,-6],[-2,-12],[1,-6],[5,0],[2,-4],[2,-6],[1,-3],[-1,-5],[-3,-8],[-1,-9],[-2,-8],[-1,-11],[-1,-1],[0,-2],[0,-2],[0,-1],[-1,0],[-4,0],[-5,-1],[-1,0],[1,-3],[2,-1],[4,-3],[1,-1],[0,-2],[-1,-2],[-1,-2],[1,-2],[2,-2],[0,-1],[0,-5],[-4,-18],[1,-8],[8,-5],[-2,-4],[1,-3],[1,-3],[3,-3],[0,1],[1,1],[0,1],[4,-5],[-1,-6],[-5,-5],[-5,-2],[6,-23],[6,-5],[7,-9],[2,-3],[-3,-2],[-4,-1],[-8,0],[0,-1],[5,-1],[4,-1],[3,-3],[1,-5],[2,-4],[5,2],[5,3],[1,2],[5,-1],[6,-4],[5,-1],[4,-3],[3,-7],[6,-2],[7,-7],[3,-2],[2,-3],[4,-7],[2,-4],[0,-5],[1,-3],[1,-1],[3,-5],[3,-3],[5,-2],[9,-2],[1,0],[2,0],[2,0],[1,-1],[0,-2],[1,-2],[1,-1],[1,-2],[0,1],[2,0],[2,-1],[2,0],[2,-2],[2,-4],[1,-2],[12,-12],[5,-5],[2,-6],[1,-1],[2,-1],[1,1],[1,2],[2,2],[3,0],[4,-2],[3,-2],[4,-3],[1,-1],[2,-1],[1,-2],[-1,-1],[-1,-1],[-1,-1],[0,-1],[0,-4],[1,-2],[2,-2],[4,-1],[0,1],[1,0],[0,1],[0,1],[0,1],[2,4],[0,4],[1,-1],[1,-2],[1,0],[6,1],[5,-3],[4,-5],[6,-2],[-2,7],[-2,4],[-2,4],[-3,1],[-6,4],[-2,2],[2,3],[4,1],[4,0],[4,-1],[3,-2],[2,-2],[2,-3],[5,0],[0,-2],[-5,-4],[2,-4],[4,-1],[0,3],[2,1],[7,5],[0,-7],[1,-7],[3,-7],[3,-5],[5,-5],[3,-2],[4,0],[2,0],[1,2],[1,1],[0,1],[1,1],[1,1],[1,-2],[0,-5],[1,-2],[2,-2],[4,-3],[1,-2],[1,-4],[13,-38],[12,-23],[6,-4],[8,-13],[6,-6],[34,-23],[4,-1],[4,0],[13,-4],[8,-5],[6,-8],[5,-9],[2,-10],[0,-19],[1,-4],[16,-23],[1,-1],[2,-3],[8,-5],[1,-4],[-1,-2],[-1,-1],[-5,0],[-1,0],[-3,1],[-1,1],[-2,-1],[-1,-1],[0,-1],[1,0],[6,-1],[5,-2],[4,-2],[2,-3],[3,-3],[3,-3],[4,-2],[11,-1],[6,-2],[5,-2],[4,-2],[0,3],[0,3],[1,2],[2,1],[1,-1],[2,-5],[2,-1],[11,-2],[2,-1],[1,-2],[0,-6],[3,-20],[-1,-2],[-8,-4],[-2,-2],[-1,-3],[-1,-2],[4,1],[12,7],[4,0],[1,-3],[-2,-2],[-3,-2],[-1,-1],[1,-2],[3,-1],[2,-2],[-3,-3],[-8,-7],[-3,-4],[-1,-5],[2,-13],[0,-6],[-5,-1],[2,-3],[3,-2],[7,-4],[-3,-1],[-2,0],[2,-4],[4,-3],[4,-2],[4,0],[9,-14],[1,-4],[1,-9],[1,-4],[-1,-1],[-2,-3],[0,-1],[-1,-3],[1,-6],[1,0],[6,11],[1,3],[0,7],[1,4],[2,3],[-2,4],[-1,1],[4,-2],[1,-2],[1,-7],[5,-11],[2,-4],[6,-2],[7,0],[6,2],[-2,-3],[-4,-6],[-1,-5],[-4,-8],[-2,-3],[-1,-3],[-2,-9],[-2,-2],[-3,-11],[-1,-4],[-6,-22],[-1,-8],[0,-4],[1,-4],[2,-3],[3,-1],[3,-1],[3,0],[2,-4],[-3,-6],[-2,-8],[-1,-41],[1,-4],[0,-2],[1,-1],[7,-2],[-2,-10],[0,-4],[2,-7],[1,-3],[1,-1],[-2,-1],[-1,-4],[-1,-5],[0,-3],[0,1],[1,-8],[1,-8],[12,-26],[1,-7],[-4,-5],[-9,4],[-8,-2],[-7,-4],[-6,-7],[-2,-2],[-2,-5],[0,-4],[5,-2],[4,-1],[3,1],[2,0],[2,2],[1,-1],[0,-10],[-2,-3],[-4,-1],[-3,-3],[-3,-5],[1,-3],[3,-3],[2,-2],[5,-2],[9,-2],[3,-3],[2,-4],[2,-10],[2,-5],[3,-3],[3,-1],[4,0],[2,-1],[2,-2],[2,-3],[3,-6],[0,-2],[0,-2],[1,-1],[4,-5],[1,-2],[0,-14],[1,-3],[2,-3],[5,-4],[1,-3],[1,-5],[1,-2],[1,-1],[2,0],[6,-6],[2,-4],[-1,-3],[-1,-3],[2,-1],[3,1],[3,4],[2,0],[-1,-4],[-2,-11],[-1,-4],[1,-12],[-3,5],[-2,-2],[-2,-3],[0,-5],[0,-3],[3,-1],[1,1],[2,3],[2,2],[1,-7],[1,-21],[3,-4],[4,-4],[5,-8],[1,0]],[[6438,9689],[-1,-1],[-1,2],[-2,3],[-1,1],[0,1],[2,1],[1,-1],[1,0],[1,0],[2,-1],[1,0],[-1,-1],[0,-2],[-1,-1],[-1,-1]],[[6357,9675],[-1,-1],[-1,0],[-2,1],[-3,-1],[-5,-1],[-2,-1],[-3,-1],[-2,-3],[-1,-3],[-1,-2],[-7,3],[-2,1],[-2,5],[-3,4],[-2,6],[1,6],[1,2],[0,1],[1,0],[4,1],[1,0],[1,1],[1,2],[4,2],[1,0],[0,1],[2,4],[5,-1],[3,-5],[6,-10],[5,-6],[1,-2],[0,-3]],[[6361,9693],[-6,-2],[-4,4],[-2,5],[3,5],[7,1],[6,-3],[1,-5],[-5,-5]],[[6343,9708],[-4,-2],[-1,0],[-1,1],[-2,1],[0,2],[1,1],[3,2],[3,3],[2,1],[1,-1],[0,-2],[-2,-6]],[[6365,9714],[-3,-2],[-1,1],[-2,1],[-1,3],[2,0],[3,2],[0,1],[1,0],[1,-2],[0,-4]],[[6364,9785],[-6,-10],[-3,1],[-2,2],[-4,1],[-3,1],[-2,-1],[-3,2],[-2,3],[-1,3],[-1,3],[3,1],[1,1],[1,1],[0,4],[0,1],[4,3],[5,1],[8,0],[5,-3],[4,-4],[1,-5],[-1,-2],[-4,-3]],[[6332,9792],[-3,-1],[-2,0],[-1,3],[-3,3],[-4,3],[-2,2],[0,4],[9,15],[4,-1],[2,-1],[5,-5],[1,-2],[0,-2],[-1,-10],[-2,-2],[-1,-1],[-2,-5]],[[6480,9828],[0,-1],[1,0],[1,0],[1,-3],[0,-2],[-2,-2],[-4,4],[-1,4],[4,0]],[[6336,9844],[1,0],[1,0],[1,-1],[0,-1],[-1,0],[-3,-2],[-1,-3],[-2,4],[-1,1],[1,1],[2,1],[2,0]],[[6741,9852],[-3,-4],[-1,2],[1,1],[3,1]],[[6497,9862],[-3,-1],[-3,0],[-1,1],[0,2],[4,2],[3,-1],[1,-1],[1,0],[1,-1],[-3,-1]],[[6436,9882],[-5,-1],[0,2],[3,1],[1,0],[1,-2]],[[6678,9920],[-1,-1],[-1,4],[3,1],[1,2],[2,-3],[-1,-1],[-1,-2],[-2,0]],[[6363,9926],[-2,-1],[-4,1],[-4,2],[-1,2],[6,0],[5,-2],[0,-2]],[[6463,9970],[2,-3],[-3,-3],[-3,-2],[-3,-2],[-2,-2],[-4,0],[-15,0],[-3,0],[-4,2],[-2,4],[2,4],[6,2],[6,0],[6,-2],[5,1],[8,2],[4,-1]],[[6352,9988],[-8,0],[-9,1],[-7,3],[3,5],[9,2],[16,-5],[1,-3],[-1,-2],[-4,-1]],[[9986,5104],[5,0],[3,-3],[2,-4],[3,-4],[-2,-2],[-2,-2],[-2,-1],[-3,1],[3,3],[1,4],[-2,4],[-3,3],[-2,-2],[-1,1],[0,2]],[[7457,2498],[0,-2],[0,-1],[-1,-3],[-1,-2],[-2,-3],[-1,-1],[-1,-3],[-2,-6],[-3,-5],[-2,-2],[-4,1],[-5,3],[-1,0],[-2,0],[-1,0],[-1,1],[-1,1],[1,2],[0,1],[1,-1],[-2,5],[-1,1],[-3,0],[1,1],[2,2],[2,0],[-5,3],[-3,-2],[-1,-10],[-3,-4],[-4,-3],[-4,1],[-3,3],[-2,5],[-3,3],[-4,2],[-1,2],[1,4],[4,0],[11,-9],[2,-1],[2,1],[1,4],[-1,8],[-1,4],[-2,3],[2,2],[1,1],[2,0],[2,-1],[4,-4],[2,-2],[2,3],[1,2],[0,1],[-1,3],[-1,3],[1,2],[4,3],[7,7],[4,3],[2,-1],[5,-16],[0,-1],[5,-5],[1,-3]],[[7473,2529],[-3,-2],[-5,1],[-2,0],[-3,-1],[-2,-1],[-2,-1],[-1,2],[-2,5],[2,2],[4,1],[3,4],[-4,2],[-11,2],[-5,2],[-1,3],[3,2],[11,1],[-1,1],[-3,2],[-2,1],[1,4],[3,5],[3,1],[3,-6],[5,-3],[1,-3],[0,-3],[1,-2],[1,-3],[1,-2],[1,-3],[2,-5],[2,-6]],[[7633,2659],[-6,-4],[-10,0],[-7,0],[3,-7],[5,-4],[-1,-1],[-13,-2],[-3,-1],[-2,-4],[-2,0],[0,5],[3,2],[2,4],[2,7],[-5,1],[-2,3],[1,5],[2,4],[3,2],[6,2],[3,3],[3,-1],[5,0],[4,-1],[1,-3],[1,-4],[1,-3],[2,-2],[4,-1]],[[7667,2723],[-1,0],[-2,1],[-3,1],[-3,2],[-3,2],[-6,1],[-2,1],[-2,5],[3,1],[4,-1],[7,-2],[4,-2],[2,-2],[1,-2],[2,-4],[-1,-1]],[[6895,3081],[1,0],[1,1],[2,1],[1,0],[8,-1],[14,-5],[8,-1],[8,1],[4,0],[3,-2],[3,-3],[3,-1],[7,-3],[3,-5],[2,0],[3,-1],[5,-2],[4,1],[2,2],[-3,4],[20,-1],[5,1],[3,3],[0,5],[-1,5],[-2,3],[4,0],[6,-4],[3,-4],[-7,-3],[-1,-1],[-1,-3],[1,-2],[1,-2],[9,-5],[3,-2],[2,-2],[3,0],[7,0],[4,-1],[8,-4],[6,1],[12,4],[2,-9],[8,-5],[11,-3],[19,-2],[4,-2],[1,-4],[2,-3],[4,-4],[6,-6],[4,-2],[5,-1],[5,-1],[11,0],[2,-1],[2,-1],[0,-3],[2,0],[5,0],[5,-1],[8,-5],[6,-2],[4,-2],[2,-1],[2,-1],[8,-1],[21,-8],[30,-3],[15,1],[15,3],[12,4],[2,-1],[0,-5],[1,-2],[2,-2],[3,0],[4,1],[-4,3],[2,3],[7,4],[2,2],[3,4],[1,2],[3,1],[5,0],[3,0],[2,2],[4,2],[3,1],[2,0],[2,-1],[3,-1],[2,-1],[2,-3],[3,-5],[0,-4],[-2,-2],[2,-3],[3,-1],[4,-1],[4,-1],[3,2],[1,1],[3,0],[3,0],[2,-1],[2,-1],[2,0],[3,1],[-3,2],[-3,2],[-3,2],[-10,2],[-5,2],[-3,3],[-1,6],[4,7],[9,3],[11,2],[9,4],[2,1],[1,1],[2,1],[3,1],[1,1],[1,0],[1,0],[2,0],[0,-2],[1,-1],[29,-3],[9,3],[16,11],[2,-3],[10,3],[3,-2],[0,-3],[1,-2],[1,0],[6,-1],[1,-2],[1,-2],[1,-2],[8,-1],[9,5],[8,8],[13,17],[1,4],[2,2],[12,4],[4,0],[3,-2],[4,-4],[3,-3],[8,3],[5,-3],[5,-4],[5,-2],[6,2],[8,3],[6,4],[3,6],[1,2],[3,5],[1,7],[2,3],[2,1],[3,2],[2,-1],[1,0],[5,-1],[2,0],[1,-1],[2,-4],[2,0],[4,1],[2,-1],[3,-2],[4,-4],[4,-6],[3,-3],[4,-1],[8,1],[2,-1],[17,-18],[6,-8],[2,-5],[1,-4],[-1,-2],[-4,-1],[-3,-2],[-3,-3],[-1,-2],[2,0],[2,-1],[2,-2],[1,-1],[-4,-9],[0,-2],[-3,-2],[-1,-6],[0,-7],[1,-4],[1,-3],[1,-2],[7,-7],[1,-3],[-1,-3],[-10,-6],[-3,-4],[0,-4],[17,12],[4,0],[-5,-7],[-11,-28],[0,-3],[1,-4],[0,-5],[0,-3],[-1,-2],[0,-2],[6,-8],[1,-3],[1,-4],[-1,-5],[-2,-5],[-3,-4],[0,-4],[4,-14],[-3,-3],[-4,-3],[-3,-5],[2,-5],[1,-1],[2,-6],[0,-2],[1,-2],[5,-4],[1,-2],[0,-1],[1,-1],[1,-1],[-3,-7],[-2,-12],[-1,-11],[14,-13],[0,-1],[-1,-1],[-2,-2],[-6,-6],[-1,-3],[10,-3],[0,-5],[-2,-8],[-1,-1],[-4,-3],[-1,-1],[-1,-3],[-2,1],[-2,3],[-1,1],[-7,1],[-2,2],[1,2],[4,2],[1,1],[1,1],[2,2],[1,2],[1,3],[-1,1],[-2,2],[-2,2],[-2,1],[6,3],[3,2],[1,3],[-6,0],[-4,2],[-7,6],[-3,2],[-14,3],[6,4],[3,2],[3,1],[3,1],[2,4],[0,3],[-7,3],[-1,4],[-1,3],[-1,1],[-3,-1],[0,-3],[3,-4],[0,-5],[-2,0],[-2,2],[-3,1],[-4,-2],[0,-3],[2,-4],[0,-4],[-1,0],[-2,-1],[-2,-1],[0,-1],[2,-2],[1,-1],[2,-1],[3,-1],[11,-2],[-22,0],[-5,-2],[-3,-3],[0,-5],[0,-10],[-1,-3],[-8,-6],[-1,-2],[0,-3],[-1,-2],[-3,0],[0,-2],[-1,-3],[-6,-9],[-4,-4],[2,1],[4,4],[3,1],[3,-1],[2,-4],[0,-3],[-5,-4],[-1,-7],[2,-10],[0,-10],[-1,-6],[-3,-2],[-3,-1],[-3,-4],[-3,-1],[-2,1],[-3,5],[-3,2],[0,-3],[-1,-2],[-2,-1],[-3,0],[11,-10],[1,-5],[0,-4],[0,-1],[1,-1],[1,-1],[1,-1],[0,-1],[0,-6],[0,-3],[-1,-2],[0,-4],[-2,-3],[-5,-3],[-3,-1],[-3,-2],[-2,-4],[0,-5],[1,-4],[-1,-2],[-1,0],[-2,1],[-4,-6],[-1,-3],[0,-3],[3,-2],[4,-1],[5,0],[3,1],[0,2],[-7,2],[2,5],[6,2],[4,-4],[0,-3],[2,-1],[2,1],[2,1],[2,0],[1,-1],[1,-1],[0,-2],[1,-2],[3,-1],[1,-2],[-1,-1],[-1,-2],[-1,-1],[0,-2],[0,-1],[2,0],[1,-1],[1,-1],[0,-5],[-2,-1],[-3,-1],[-3,-2],[-2,-5],[0,-11],[-3,-2],[5,-6],[1,-2],[0,-2],[-1,-2],[-2,-3],[5,-1],[2,-1],[1,-2],[-1,-4],[-1,-1],[-1,-1],[-2,-1],[0,-3],[2,-2],[2,-2],[0,-2],[-4,1],[-3,1],[-13,9],[-2,3],[-1,3],[-1,3],[-1,2],[-3,-2],[-2,-4],[-1,-3],[1,-4],[2,-3],[-7,0],[-3,-2],[-3,-4],[-3,-3],[-5,6],[-15,12],[-1,6],[2,1],[6,3],[3,2],[-18,6],[-4,2],[-2,2],[-2,4],[-2,5],[1,3],[2,1],[7,3],[3,1],[1,0],[1,2],[-1,1],[0,1],[0,1],[0,1],[-1,2],[0,2],[3,1],[5,-1],[2,0],[1,-2],[0,-6],[0,-3],[-3,-3],[10,-8],[5,-2],[7,-1],[1,0],[3,1],[1,1],[4,0],[4,1],[2,1],[5,4],[-7,0],[-4,2],[-3,4],[-2,6],[2,0],[1,0],[2,1],[0,2],[-5,1],[-1,3],[2,3],[0,3],[-3,2],[-13,-2],[-2,1],[-4,2],[-2,0],[-2,0],[-7,-1],[-2,1],[-2,1],[-1,2],[-2,2],[-2,0],[-4,1],[-1,0],[-1,2],[0,2],[-1,2],[-2,2],[-2,1],[-2,0],[-11,-3],[-4,-2],[-3,-2],[0,-6],[4,-8],[8,-13],[-4,-6],[-2,-3],[-4,-2],[-13,-3],[-3,-1],[-3,1],[-2,3],[-3,3],[0,3],[3,3],[3,-2],[3,-4],[2,-1],[4,1],[2,4],[1,3],[-1,2],[-3,2],[0,4],[2,8],[-4,-1],[-4,-3],[-4,0],[-1,3],[-1,5],[-4,3],[-4,1],[-4,2],[-12,16],[-1,2],[-2,0],[-3,-1],[-3,-1],[2,-2],[3,-2],[1,-1],[4,-4],[3,-4],[4,-7],[5,-7],[0,-3],[-4,-7],[-2,-5],[-1,-4],[1,-10],[-2,-1],[-4,3],[-7,5],[-4,-3],[2,-4],[6,-5],[2,-4],[-1,-2],[-4,-1],[-4,-3],[-2,-4],[-1,-3],[1,-4],[2,-8],[0,-4],[0,-8],[-2,-3],[-4,-3],[-5,-1],[-3,1],[-2,1],[-4,1],[-2,2],[-1,1],[1,2],[0,2],[-3,0],[-9,0],[-2,2],[2,4],[4,3],[0,2],[-1,2],[-2,6],[-2,-5],[-4,-3],[-4,-3],[-2,1],[-5,3],[-1,1],[0,9],[-1,6],[-3,1],[-4,-3],[-3,-2],[-1,-4],[-1,-6],[1,-5],[3,-2],[2,-1],[16,-9],[4,-3],[3,-3],[1,-4],[-1,-2],[-3,-2],[-2,-1],[-2,-1],[-2,0],[-2,1],[0,1],[-2,1],[-4,0],[-5,-1],[-4,-2],[-3,-3],[13,1],[3,-1],[4,-2],[0,-2],[-5,-4],[-2,-2],[-4,-6],[-1,-2],[-4,-2],[-4,0],[-9,0],[5,-3],[12,-2],[4,-5],[-12,1],[-4,-1],[-2,-4],[1,-2],[2,-1],[1,-2],[-1,-3],[-2,-1],[-3,-1],[-3,1],[-2,1],[-2,-6],[3,-2],[4,-1],[4,-2],[0,-4],[-4,-3],[-15,-6],[-2,0],[-3,0],[-1,1],[1,1],[-2,2],[-5,3],[-4,0],[-5,-1],[-11,-4],[-2,2],[-1,3],[-4,5],[-15,6],[-1,1],[-2,4],[-2,9],[-3,4],[-3,2],[-2,-3],[1,-5],[1,-5],[-3,1],[-1,1],[-5,-4],[-6,0],[-24,2],[-4,1],[-4,4],[-4,-4],[-3,-2],[-3,0],[-3,1],[-1,2],[-1,3],[-1,3],[-2,1],[-4,0],[-3,0],[-3,-1],[-1,-3],[0,-3],[-1,-3],[-2,-2],[-2,4],[-2,2],[-2,2],[-3,0],[-7,-2],[-2,-1],[-1,-1],[1,-4],[0,-1],[-2,-1],[-1,1],[-2,1],[-1,0],[-12,-3],[1,16],[-1,6],[-5,8],[-13,7],[-2,2],[2,3],[5,-1],[5,-3],[3,0],[-1,2],[-5,5],[4,1],[20,-2],[6,-2],[4,-4],[2,-4],[5,-4],[1,3],[-2,4],[1,2],[1,0],[1,-1],[2,0],[-1,3],[1,1],[2,-1],[1,0],[2,-2],[4,-3],[1,-1],[2,2],[0,6],[-1,5],[-1,3],[-1,1],[-6,4],[-4,3],[-2,2],[-2,-1],[-6,-10],[-4,-2],[-6,3],[0,2],[-1,5],[0,1],[-3,1],[-2,-1],[-1,-2],[0,-2],[-2,-5],[-4,0],[-4,3],[-4,3],[-3,3],[-1,4],[-1,4],[0,5],[-1,1],[-5,2],[-4,4],[-1,-1],[0,-5],[1,-4],[-1,-2],[-2,0],[-2,0],[-2,-1],[-2,0],[-1,-1],[-1,-3],[3,-1],[8,1],[2,-1],[0,-3],[-3,-2],[-4,-2],[-8,1],[-3,1],[-3,1],[-5,11],[-1,1],[1,6],[-1,1],[-6,4],[-3,2],[-1,1],[0,1],[-1,3],[0,1],[-1,1],[-3,1],[-1,3],[-1,3],[1,4],[-2,-1],[-2,-1],[-3,0],[-2,0],[-3,2],[-1,2],[1,4],[1,1],[2,2],[0,2],[-2,1],[-3,0],[-2,1],[-5,3],[-8,12],[-3,2],[-13,0],[-2,1],[-9,9],[-5,7],[-4,8],[-4,12],[-3,3],[-1,2],[-1,1],[-3,1],[-2,1],[0,1],[1,1],[0,1],[3,4],[1,2],[-2,1],[-2,2],[-4,11],[0,1],[-5,0],[-1,0],[-1,3],[-1,3],[-2,2],[-2,1],[-6,1],[-1,2],[8,8],[-6,4],[-5,8],[-3,8],[2,8],[-6,13],[-2,7],[-1,7],[0,13],[-1,3],[-2,5],[0,3],[3,-1],[3,-4],[3,-3],[1,-3],[1,-4],[3,-1],[8,-2],[3,-1],[1,-1],[2,-2],[1,-2],[1,-2],[1,-2],[6,-1],[14,-9],[2,-2],[1,-3],[1,-8],[2,-8],[2,-8],[2,-2],[2,0],[1,5],[0,16],[5,-3],[3,1],[1,7],[2,4],[4,5],[1,2],[-3,0],[-2,-1],[-1,-1],[0,-1],[-1,-1],[-1,0],[-1,1],[0,1],[0,1],[-1,2],[0,1],[0,2],[-2,1],[-2,0],[-1,-1],[0,-2],[-1,-1],[-5,2],[-12,13],[-4,4],[-3,2],[-2,1],[-1,6],[-3,6],[-1,4],[1,4],[-3,1],[-2,0],[-4,-3],[-1,-3],[-1,0],[-3,-2],[-1,-1],[0,-2],[1,-3],[0,-2],[-2,-2],[-2,1],[-7,5],[8,16],[-3,18],[-10,17],[-11,11],[-18,13],[-2,0],[-1,1],[-1,6],[-1,2],[-2,0],[-2,2],[-9,13],[-4,3],[-1,2],[-2,2],[-2,1],[-3,0],[-2,0],[-1,2],[-1,3],[-1,2],[1,6],[-11,23],[-12,15],[-3,7],[-2,1],[-2,1],[-3,2],[-3,3],[1,1],[0,1],[0,1],[6,2],[0,6],[-3,6],[-15,21],[-4,4],[2,5],[0,7],[-1,7],[-4,4],[2,8],[-4,7],[-11,12],[3,1],[2,1],[2,3],[0,3],[-4,5],[-1,2],[2,1],[3,0],[4,5],[2,1],[4,0],[2,2],[2,3],[1,7],[0,7],[-4,23],[0,5],[2,5],[5,4],[1,-4],[2,-3],[4,-5],[1,-2],[1,-3],[1,-2]],[[6955,3091],[3,-3],[1,-3],[-6,0],[-4,3],[-8,-1],[-12,-5],[-1,0],[-1,0],[-2,0],[-2,-1],[-2,0],[-1,1],[-2,1],[-1,10],[0,2],[10,9],[3,2],[2,-3],[1,-3],[4,-2],[3,0],[4,-3],[4,-1],[4,-1],[3,-2]],[[7639,3113],[-2,-3],[-6,2],[-1,3],[-4,1],[-4,1],[-1,0],[-1,1],[-2,3],[0,2],[-1,1],[1,0],[1,2],[4,2],[9,1],[3,2],[14,2],[-1,-2],[-2,-2],[-1,-2],[-1,-2],[0,-3],[0,-2],[-3,0],[-1,-3],[-1,-4]],[[6900,3147],[0,-17],[-1,-1],[-5,-3],[0,-14],[-5,-1],[-2,3],[0,2],[-1,12],[0,2],[-4,2],[0,1],[2,3],[3,0],[3,0],[4,2],[1,2],[2,11],[0,1],[1,-1],[2,-3],[0,-1]],[[6925,3139],[-1,-1],[-6,0],[-3,3],[-3,3],[-3,3],[1,0],[5,1],[1,0],[2,2],[1,2],[1,1],[-2,1],[0,1],[1,1],[2,1],[2,0],[5,0],[2,0],[2,-1],[5,-3],[0,-2],[-2,-2],[-1,-4],[1,-3],[-1,-1],[-5,0],[-2,-1],[-2,-1]],[[7681,3161],[5,-1],[2,-1],[8,-9],[3,-3],[-1,-2],[-2,-1],[-1,1],[-2,2],[0,-1],[-2,-4],[-4,-1],[-1,0],[-2,-3],[-1,-2],[0,-3],[-4,2],[-4,-1],[-4,-2],[-3,-2],[0,8],[-3,7],[-6,0],[-14,-6],[-2,3],[-1,1],[-2,1],[-3,0],[-1,-1],[-2,-2],[-1,0],[-2,0],[-2,1],[-2,0],[-15,-1],[-5,1],[-2,1],[-2,3],[-1,1],[-5,0],[-2,0],[-1,2],[1,6],[2,3],[14,6],[4,1],[9,0],[5,-1],[3,0],[5,-4],[2,2],[1,4],[9,1],[6,1],[3,2],[1,1],[5,2],[1,1],[3,0],[1,-1],[10,-10],[2,-2]],[[7563,3177],[2,-2],[4,0],[5,1],[0,-3],[-3,-3],[-6,0],[-2,2],[-4,2],[4,3]],[[7543,3220],[-5,-2],[-3,0],[0,3],[4,3],[2,9],[5,3],[2,-3],[-2,-4],[-2,-4],[-1,-5]],[[7584,3304],[41,-41],[2,-3],[4,-5],[9,-4],[19,-2],[-1,-5],[0,-17],[-2,-4],[-9,-6],[-4,-4],[5,-1],[4,1],[5,3],[2,3],[2,-3],[3,-5],[3,-9],[-1,-3],[-2,0],[-6,5],[-1,-5],[3,-2],[5,-2],[0,-3],[-4,-3],[-4,1],[-4,3],[-5,2],[-5,1],[-2,0],[-3,-1],[-1,-2],[-1,-6],[-1,-1],[-4,-1],[-5,-2],[-5,-2],[-10,4],[-6,3],[-2,4],[4,4],[-6,6],[-3,3],[0,3],[0,3],[-1,4],[-2,3],[-2,3],[-5,0],[-2,0],[-2,1],[0,5],[-2,4],[-4,2],[-5,1],[-3,0],[0,2],[4,7],[1,3],[-1,3],[-3,7],[-1,3],[-1,5],[-4,0],[-8,-4],[-4,0],[-11,7],[4,3],[4,4],[4,2],[9,3],[2,2],[-2,4],[2,1],[4,2],[-3,4],[-1,1],[-1,2],[1,2],[3,0],[2,-2],[2,-1],[3,2],[9,8]],[[6744,3230],[-1,-2],[-2,-2],[-1,-2],[-3,0],[-4,-1],[-21,-10],[-4,0],[-4,4],[-1,4],[-2,9],[3,-1],[1,4],[0,9],[-1,6],[-3,2],[-4,2],[-3,3],[-1,4],[2,12],[1,2],[3,2],[1,5],[0,10],[-1,1],[-2,2],[0,1],[0,1],[2,3],[1,1],[-2,5],[1,3],[3,1],[4,1],[5,2],[4,3],[2,3],[0,4],[-2,6],[-1,4],[3,2],[2,1],[4,1],[2,0],[2,-1],[7,-5],[9,-4],[4,-2],[2,-5],[2,-2],[1,-2],[1,-2],[-2,-10],[1,-5],[3,-9],[1,-5],[-1,-5],[-4,-9],[0,-5],[2,-2],[2,-1],[2,0],[2,-1],[1,-3],[0,-2],[-1,-2],[0,-8],[-1,-2],[-1,-1],[-2,-1],[-1,-3],[0,-2],[-1,-2],[-2,-1],[-5,-2],[-2,-1]],[[7455,3354],[-2,-3],[-1,1],[-2,0],[-2,-3],[-1,1],[0,1],[-1,2],[0,1],[-2,1],[0,1],[1,0],[1,0],[0,2],[2,2],[1,0],[1,1],[1,0],[1,0],[4,-3],[0,-1],[-1,-1],[0,-1],[0,-1]]],&quot;transform&quot;:{&quot;scale&quot;:[0.004619163088108814,0.004551480538653874],&quot;translate&quot;:[112.91944420700005,-54.75042083099996]}};</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">autTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__AUT__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">azeTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__AZE__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">bdiTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__BDI__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">belTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__BEL__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">benTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__BEN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">bfaTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__BFA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">bgdTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__BGD__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">bgrTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__BGR__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">bhrTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__BHR__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">bhsTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__BHS__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">bihTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__BIH__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">bjnTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__BJN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">blmTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__BLM__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">blrTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__BLR__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">blzTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__BLZ__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">bmuTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__BMU__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">bolTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__BOL__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">braTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__BRA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">brbTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__BRB__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">brnTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__BRN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">btnTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__BTN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">norTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__NOR__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">bwaTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__BWA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">cafTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__CAF__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">canTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__CAN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">cheTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__CHE__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">chlTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__CHL__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">chnTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__CHN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">civTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__CIV__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">clpTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__CLP__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">cmrTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__CMR__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">codTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__COD__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">cogTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__COG__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">cokTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__COK__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">colTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__COL__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">comTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__COM__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">cpvTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__CPV__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">criTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__CRI__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">csiTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__CSI__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">cubTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__CUB__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">cuwTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__CUW__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">cymTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__CYM__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">cynTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__CYN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">cypTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__CYP__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">czeTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__CZE__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">deuTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__DEU__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">djiTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__DJI__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">dmaTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__DMA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">dnkTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__DNK__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">domTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__DOM__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">dzaTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__DZA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">ecuTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ECU__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">egyTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__EGY__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">eriTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ERI__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">esbTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ESB__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">espTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ESP__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">estTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__EST__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">ethTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ETH__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">finTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__FIN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">fjiTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__FJI__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">flkTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__FLK__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">fraTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__FRA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">froTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__FRO__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">fsmTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__FSM__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">gabTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__GAB__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">psxTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__PSX__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">gbrTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__GBR__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">geoTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__GEO__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">ggyTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__GGY__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">ghaTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__GHA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">gibTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__GIB__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">ginTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__GIN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">gmbTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__GMB__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">gnbTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__GNB__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">gnqTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__GNQ__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">grcTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__GRC__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">grdTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__GRD__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">grlTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__GRL__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">gtmTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__GTM__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">gumTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__GUM__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">guyTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__GUY__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">hkgTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__HKG__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">hmdTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__HMD__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">hndTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__HND__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">hrvTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__HRV__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">htiTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__HTI__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">hunTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__HUN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">idnTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__IDN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">imnTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__IMN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">indTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__IND__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">ioaTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__IOA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">iotTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__IOT__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">irlTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__IRL__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">irnTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__IRN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">irqTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__IRQ__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">islTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ISL__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">isrTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ISR__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">itaTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ITA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">jamTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__JAM__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">jeyTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__JEY__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">jorTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__JOR__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">jpnTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__JPN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">kabTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__KAB__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">kasTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__KAS__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">kazTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__KAZ__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">kenTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__KEN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">kgzTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__KGZ__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">khmTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__KHM__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">kirTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__KIR__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">knaTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__KNA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">korTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__KOR__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">kosTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__KOS__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">kwtTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__KWT__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">laoTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__LAO__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">lbnTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__LBN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">lbrTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__LBR__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">lbyTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__LBY__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">lcaTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__LCA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">lieTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__LIE__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">lkaTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__LKA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">lsoTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__LSO__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">ltuTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__LTU__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">luxTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__LUX__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">lvaTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__LVA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">macTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__MAC__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">mafTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__MAF__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">marTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__MAR__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">mcoTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__MCO__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">mdaTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__MDA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">mdgTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__MDG__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">mdvTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__MDV__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">mexTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__MEX__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">mhlTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__MHL__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">mkdTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__MKD__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">mliTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__MLI__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">mltTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__MLT__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">mmrTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__MMR__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">mneTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__MNE__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">mngTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__MNG__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">mnpTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__MNP__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">mozTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__MOZ__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">mrtTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__MRT__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">msrTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__MSR__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">musTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__MUS__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">mwiTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__MWI__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">mysTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__MYS__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">namTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__NAM__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">nclTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__NCL__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">nerTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__NER__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">nfkTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__NFK__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">ngaTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__NGA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">nicTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__NIC__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">niuTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__NIU__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">nldTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__NLD__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">nplTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__NPL__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">nruTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__NRU__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">nulTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__NUL__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">nzlTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__NZL__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">omnTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__OMN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">pakTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__PAK__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">panTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__PAN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">pcnTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__PCN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">perTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__PER__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">pgaTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__PGA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">phlTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__PHL__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">plwTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__PLW__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">pngTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__PNG__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">polTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__POL__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">priTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__PRI__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">prkTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__PRK__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">prtTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__PRT__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">pryTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__PRY__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">pyfTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__PYF__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">qatTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__QAT__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">rouTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ROU__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">rusTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__RUS__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">rwaTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__RWA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">sahTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SAH__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">sauTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SAU__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">scrTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SCR__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">sdnTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SDN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">sdsTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SDS__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">senTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SEN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">serTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SER__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">sgpTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SGP__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">sgsTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SGS__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">shnTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SHN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">slbTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SLB__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">sleTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SLE__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">slvTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SLV__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">smrTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SMR__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">solTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SOL__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">somTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SOM__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">spmTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SPM__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">srbTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SRB__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">stpTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__STP__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">surTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SUR__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">svkTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SVK__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">svnTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SVN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">sweTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SWE__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">swzTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SWZ__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">sxmTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SXM__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">sycTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SYC__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">syrTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__SYR__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">tcaTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__TCA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">tcdTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__TCD__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">tgoTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__TGO__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">thaTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__THA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">tjkTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__TJK__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">tkmTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__TKM__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">tlsTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__TLS__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">tonTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__TON__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">ttoTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__TTO__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">tunTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__TUN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">turTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__TUR__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">tuvTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__TUV__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">twnTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__TWN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">tzaTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__TZA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">ugaTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__UGA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">ukrTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__UKR__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">umiTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__UMI__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">uryTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__URY__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">usaTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__USA__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">usgTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__USG__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">uzbTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__UZB__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">vatTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__VAT__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">vctTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__VCT__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">venTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__VEN__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">vgbTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__VGB__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">virTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__VIR__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">vnmTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__VNM__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">vutTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__VUT__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">wlfTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__WLF__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">wsbTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__WSB__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">wsmTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__WSM__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">yemTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__YEM__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">zafTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ZAF__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">zmbTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ZMB__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">zweTopo</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>__ZWE__<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L931" class="blob-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">/**</span>************************************</span></td>
      </tr>
      <tr>
        <td id="L932" class="blob-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                Utilities</span></td>
      </tr>
      <tr>
        <td id="L933" class="blob-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  **************************************<span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L934" class="blob-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L935" class="blob-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span>convert lat/lng coords to X / Y coords</span></td>
      </tr>
      <tr>
        <td id="L936" class="blob-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">latLngToXY</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">lat</span>, <span class="pl-smi">lng</span>) {</td>
      </tr>
      <tr>
        <td id="L937" class="blob-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-code blob-code-inner js-file-line">     <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">projection</span>([lng, lat]);</td>
      </tr>
      <tr>
        <td id="L938" class="blob-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L939" class="blob-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L940" class="blob-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span>add &lt;g&gt; layer to root SVG</span></td>
      </tr>
      <tr>
        <td id="L941" class="blob-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">addLayer</span> <span class="pl-k">=</span> <span class="pl-k">function</span>( <span class="pl-smi">className</span>, <span class="pl-smi">id</span>, <span class="pl-smi">first</span> ) {</td>
      </tr>
      <tr>
        <td id="L942" class="blob-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> layer;</td>
      </tr>
      <tr>
        <td id="L943" class="blob-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( first ) {</td>
      </tr>
      <tr>
        <td id="L944" class="blob-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-code blob-code-inner js-file-line">      layer <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">svg</span>.<span class="pl-en">insert</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>g<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>:first-child<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L945" class="blob-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L946" class="blob-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L947" class="blob-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-code blob-code-inner js-file-line">      layer <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">svg</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>g<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L948" class="blob-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L949" class="blob-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">layer</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span>, id <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L950" class="blob-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span>, className <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L951" class="blob-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L952" class="blob-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L953" class="blob-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">updateChoropleth</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">data</span>) {</td>
      </tr>
      <tr>
        <td id="L954" class="blob-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> svg <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">svg</span>;</td>
      </tr>
      <tr>
        <td id="L955" class="blob-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> ( <span class="pl-k">var</span> subunit <span class="pl-k">in</span> data ) {</td>
      </tr>
      <tr>
        <td id="L956" class="blob-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> ( <span class="pl-smi">data</span>.<span class="pl-en">hasOwnProperty</span>(subunit) ) {</td>
      </tr>
      <tr>
        <td id="L957" class="blob-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> color;</td>
      </tr>
      <tr>
        <td id="L958" class="blob-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> subunitData <span class="pl-k">=</span> data[subunit]</td>
      </tr>
      <tr>
        <td id="L959" class="blob-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( <span class="pl-k">!</span> subunit ) {</td>
      </tr>
      <tr>
        <td id="L960" class="blob-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L961" class="blob-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L962" class="blob-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> <span class="pl-k">if</span> ( <span class="pl-k">typeof</span> subunitData <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L963" class="blob-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-code blob-code-inner js-file-line">          color <span class="pl-k">=</span> subunitData;</td>
      </tr>
      <tr>
        <td id="L964" class="blob-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L965" class="blob-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> <span class="pl-k">if</span> ( <span class="pl-k">typeof</span> <span class="pl-smi">subunitData</span>.<span class="pl-c1">color</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L966" class="blob-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-code blob-code-inner js-file-line">          color <span class="pl-k">=</span> <span class="pl-smi">subunitData</span>.<span class="pl-c1">color</span>;</td>
      </tr>
      <tr>
        <td id="L967" class="blob-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L968" class="blob-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L969" class="blob-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-code blob-code-inner js-file-line">          color <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">fills</span>[ <span class="pl-smi">subunitData</span>.<span class="pl-smi">fillKey</span> ];</td>
      </tr>
      <tr>
        <td id="L970" class="blob-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L971" class="blob-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span>if it&#39;s an object, overriding the previous data</span></td>
      </tr>
      <tr>
        <td id="L972" class="blob-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( subunitData <span class="pl-k">===</span> <span class="pl-c1">Object</span>(subunitData) ) {</td>
      </tr>
      <tr>
        <td id="L973" class="blob-num js-line-number" data-line-number="973"></td>
        <td id="LC973" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">data</span>[subunit] <span class="pl-k">=</span> <span class="pl-en">defaults</span>(subunitData, <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">data</span>[subunit] <span class="pl-k">||</span> {});</td>
      </tr>
      <tr>
        <td id="L974" class="blob-num js-line-number" data-line-number="974"></td>
        <td id="LC974" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> geo <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">svg</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> subunit).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-info<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">JSON</span>.<span class="pl-c1">stringify</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">data</span>[subunit]));</td>
      </tr>
      <tr>
        <td id="L975" class="blob-num js-line-number" data-line-number="975"></td>
        <td id="LC975" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L976" class="blob-num js-line-number" data-line-number="976"></td>
        <td id="LC976" class="blob-code blob-code-inner js-file-line">        svg</td>
      </tr>
      <tr>
        <td id="L977" class="blob-num js-line-number" data-line-number="977"></td>
        <td id="LC977" class="blob-code blob-code-inner js-file-line">          .<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> subunit)</td>
      </tr>
      <tr>
        <td id="L978" class="blob-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-code blob-code-inner js-file-line">          .<span class="pl-en">transition</span>()</td>
      </tr>
      <tr>
        <td id="L979" class="blob-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-code blob-code-inner js-file-line">            .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fill<span class="pl-pds">&#39;</span></span>, color);</td>
      </tr>
      <tr>
        <td id="L980" class="blob-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L981" class="blob-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L982" class="blob-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L983" class="blob-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L984" class="blob-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">updatePopup</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">element</span>, <span class="pl-smi">d</span>, <span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L985" class="blob-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> self <span class="pl-k">=</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L986" class="blob-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">element</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mousemove<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L987" class="blob-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">element</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mousemove<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L988" class="blob-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> position <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">mouse</span>(<span class="pl-smi">self</span>.<span class="pl-c1">options</span>.<span class="pl-smi">element</span>);</td>
      </tr>
      <tr>
        <td id="L989" class="blob-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-smi">self</span>.<span class="pl-smi">svg</span>[<span class="pl-c1">0</span>][<span class="pl-c1">0</span>].<span class="pl-c1">parentNode</span>).<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.datamaps-hoverover<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L990" class="blob-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-code blob-code-inner js-file-line">        .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span>, ( (position[<span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-c1">30</span>)) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L991" class="blob-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">html</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L992" class="blob-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> data <span class="pl-k">=</span> <span class="pl-c1">JSON</span>.<span class="pl-c1">parse</span>(<span class="pl-smi">element</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-info<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L993" class="blob-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L994" class="blob-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">options</span>.<span class="pl-en">popupTemplate</span>(d, data);</td>
      </tr>
      <tr>
        <td id="L995" class="blob-num js-line-number" data-line-number="995"></td>
        <td id="LC995" class="blob-code blob-code-inner js-file-line">          } <span class="pl-k">catch</span> (e) {</td>
      </tr>
      <tr>
        <td id="L996" class="blob-num js-line-number" data-line-number="996"></td>
        <td id="LC996" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L997" class="blob-num js-line-number" data-line-number="997"></td>
        <td id="LC997" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L998" class="blob-num js-line-number" data-line-number="998"></td>
        <td id="LC998" class="blob-code blob-code-inner js-file-line">        })</td>
      </tr>
      <tr>
        <td id="L999" class="blob-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-code blob-code-inner js-file-line">        .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span>, ( position[<span class="pl-c1">0</span>]) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1000" class="blob-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L1001" class="blob-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1002" class="blob-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-smi">self</span>.<span class="pl-smi">svg</span>[<span class="pl-c1">0</span>][<span class="pl-c1">0</span>].<span class="pl-c1">parentNode</span>).<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.datamaps-hoverover<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>display<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>block<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1003" class="blob-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1004" class="blob-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1005" class="blob-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">addPlugin</span> <span class="pl-k">=</span> <span class="pl-k">function</span>( <span class="pl-smi">name</span>, <span class="pl-smi">pluginFn</span> ) {</td>
      </tr>
      <tr>
        <td id="L1006" class="blob-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> self <span class="pl-k">=</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L1007" class="blob-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( <span class="pl-k">typeof</span> <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>[name] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L1008" class="blob-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">Datamap</span>.<span class="pl-c1">prototype</span>[name] <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">data</span>, <span class="pl-smi">options</span>, <span class="pl-smi">callback</span>, <span class="pl-smi">createNewLayer</span>) {</td>
      </tr>
      <tr>
        <td id="L1009" class="blob-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> layer;</td>
      </tr>
      <tr>
        <td id="L1010" class="blob-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( <span class="pl-k">typeof</span> createNewLayer <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L1011" class="blob-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-code blob-code-inner js-file-line">          createNewLayer <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1012" class="blob-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1013" class="blob-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1014" class="blob-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( <span class="pl-k">typeof</span> options <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L1015" class="blob-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-code blob-code-inner js-file-line">          callback <span class="pl-k">=</span> options;</td>
      </tr>
      <tr>
        <td id="L1016" class="blob-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-code blob-code-inner js-file-line">          options <span class="pl-k">=</span> <span class="pl-c1">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L1017" class="blob-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1018" class="blob-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1019" class="blob-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-code blob-code-inner js-file-line">        options <span class="pl-k">=</span> <span class="pl-en">defaults</span>(options <span class="pl-k">||</span> {}, <span class="pl-smi">self</span>.<span class="pl-c1">options</span>[name <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Config<span class="pl-pds">&#39;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L1020" class="blob-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1021" class="blob-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span>add a single layer, reuse the old layer</span></td>
      </tr>
      <tr>
        <td id="L1022" class="blob-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( <span class="pl-k">!</span>createNewLayer <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>[name <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Layer<span class="pl-pds">&#39;</span></span>] ) {</td>
      </tr>
      <tr>
        <td id="L1023" class="blob-num js-line-number" data-line-number="1023"></td>
        <td id="LC1023" class="blob-code blob-code-inner js-file-line">          layer <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>[name <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Layer<span class="pl-pds">&#39;</span></span>];</td>
      </tr>
      <tr>
        <td id="L1024" class="blob-num js-line-number" data-line-number="1024"></td>
        <td id="LC1024" class="blob-code blob-code-inner js-file-line">          options <span class="pl-k">=</span> options <span class="pl-k">||</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>[name <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Options<span class="pl-pds">&#39;</span></span>];</td>
      </tr>
      <tr>
        <td id="L1025" class="blob-num js-line-number" data-line-number="1025"></td>
        <td id="LC1025" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1026" class="blob-num js-line-number" data-line-number="1026"></td>
        <td id="LC1026" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1027" class="blob-num js-line-number" data-line-number="1027"></td>
        <td id="LC1027" class="blob-code blob-code-inner js-file-line">          layer <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">addLayer</span>(name);</td>
      </tr>
      <tr>
        <td id="L1028" class="blob-num js-line-number" data-line-number="1028"></td>
        <td id="LC1028" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">this</span>.<span class="pl-c1">options</span>[name <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Layer<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> layer;</td>
      </tr>
      <tr>
        <td id="L1029" class="blob-num js-line-number" data-line-number="1029"></td>
        <td id="LC1029" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">this</span>.<span class="pl-c1">options</span>[name <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Options<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> options;</td>
      </tr>
      <tr>
        <td id="L1030" class="blob-num js-line-number" data-line-number="1030"></td>
        <td id="LC1030" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1031" class="blob-num js-line-number" data-line-number="1031"></td>
        <td id="LC1031" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">pluginFn</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">this</span>, [layer, data, options]);</td>
      </tr>
      <tr>
        <td id="L1032" class="blob-num js-line-number" data-line-number="1032"></td>
        <td id="LC1032" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( callback ) {</td>
      </tr>
      <tr>
        <td id="L1033" class="blob-num js-line-number" data-line-number="1033"></td>
        <td id="LC1033" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">callback</span>(layer);</td>
      </tr>
      <tr>
        <td id="L1034" class="blob-num js-line-number" data-line-number="1034"></td>
        <td id="LC1034" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1035" class="blob-num js-line-number" data-line-number="1035"></td>
        <td id="LC1035" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1036" class="blob-num js-line-number" data-line-number="1036"></td>
        <td id="LC1036" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1037" class="blob-num js-line-number" data-line-number="1037"></td>
        <td id="LC1037" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1038" class="blob-num js-line-number" data-line-number="1038"></td>
        <td id="LC1038" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1039" class="blob-num js-line-number" data-line-number="1039"></td>
        <td id="LC1039" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> expose library</span></td>
      </tr>
      <tr>
        <td id="L1040" class="blob-num js-line-number" data-line-number="1040"></td>
        <td id="LC1040" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-c1">exports</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1041" class="blob-num js-line-number" data-line-number="1041"></td>
        <td id="LC1041" class="blob-code blob-code-inner js-file-line">    d3 <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>d3<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1042" class="blob-num js-line-number" data-line-number="1042"></td>
        <td id="LC1042" class="blob-code blob-code-inner js-file-line">    topojson <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>topojson<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1043" class="blob-num js-line-number" data-line-number="1043"></td>
        <td id="LC1043" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> Datamap;</td>
      </tr>
      <tr>
        <td id="L1044" class="blob-num js-line-number" data-line-number="1044"></td>
        <td id="LC1044" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1045" class="blob-num js-line-number" data-line-number="1045"></td>
        <td id="LC1045" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">else</span> <span class="pl-k">if</span> ( <span class="pl-k">typeof</span> define <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">define</span>.<span class="pl-smi">amd</span> ) {</td>
      </tr>
      <tr>
        <td id="L1046" class="blob-num js-line-number" data-line-number="1046"></td>
        <td id="LC1046" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">define</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>datamaps<span class="pl-pds">&quot;</span></span>, [<span class="pl-s"><span class="pl-pds">&quot;</span>require<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>d3<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>topojson<span class="pl-pds">&quot;</span></span>], <span class="pl-k">function</span>(<span class="pl-smi">require</span>) {</td>
      </tr>
      <tr>
        <td id="L1047" class="blob-num js-line-number" data-line-number="1047"></td>
        <td id="LC1047" class="blob-code blob-code-inner js-file-line">      d3 <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>d3<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1048" class="blob-num js-line-number" data-line-number="1048"></td>
        <td id="LC1048" class="blob-code blob-code-inner js-file-line">      topojson <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>topojson<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1049" class="blob-num js-line-number" data-line-number="1049"></td>
        <td id="LC1049" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1050" class="blob-num js-line-number" data-line-number="1050"></td>
        <td id="LC1050" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> Datamap;</td>
      </tr>
      <tr>
        <td id="L1051" class="blob-num js-line-number" data-line-number="1051"></td>
        <td id="LC1051" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L1052" class="blob-num js-line-number" data-line-number="1052"></td>
        <td id="LC1052" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1053" class="blob-num js-line-number" data-line-number="1053"></td>
        <td id="LC1053" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1054" class="blob-num js-line-number" data-line-number="1054"></td>
        <td id="LC1054" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">window</span>.<span class="pl-smi">Datamap</span> <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-smi">Datamaps</span> <span class="pl-k">=</span> Datamap;</td>
      </tr>
      <tr>
        <td id="L1055" class="blob-num js-line-number" data-line-number="1055"></td>
        <td id="LC1055" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1056" class="blob-num js-line-number" data-line-number="1056"></td>
        <td id="LC1056" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1057" class="blob-num js-line-number" data-line-number="1057"></td>
        <td id="LC1057" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> ( <span class="pl-c1">window</span>.<span class="pl-smi">jQuery</span> ) {</td>
      </tr>
      <tr>
        <td id="L1058" class="blob-num js-line-number" data-line-number="1058"></td>
        <td id="LC1058" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">window</span>.<span class="pl-smi">jQuery</span>.<span class="pl-smi">fn</span>.<span class="pl-en">datamaps</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">options</span>, <span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L1059" class="blob-num js-line-number" data-line-number="1059"></td>
        <td id="LC1059" class="blob-code blob-code-inner js-file-line">      options <span class="pl-k">=</span> options <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L1060" class="blob-num js-line-number" data-line-number="1060"></td>
        <td id="LC1060" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">options</span>.<span class="pl-smi">element</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L1061" class="blob-num js-line-number" data-line-number="1061"></td>
        <td id="LC1061" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> datamap <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Datamap</span>(options);</td>
      </tr>
      <tr>
        <td id="L1062" class="blob-num js-line-number" data-line-number="1062"></td>
        <td id="LC1062" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> ( <span class="pl-k">typeof</span> callback <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L1063" class="blob-num js-line-number" data-line-number="1063"></td>
        <td id="LC1063" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">callback</span>(datamap, options);</td>
      </tr>
      <tr>
        <td id="L1064" class="blob-num js-line-number" data-line-number="1064"></td>
        <td id="LC1064" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1065" class="blob-num js-line-number" data-line-number="1065"></td>
        <td id="LC1065" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L1066" class="blob-num js-line-number" data-line-number="1066"></td>
        <td id="LC1066" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1067" class="blob-num js-line-number" data-line-number="1067"></td>
        <td id="LC1067" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1068" class="blob-num js-line-number" data-line-number="1068"></td>
        <td id="LC1068" class="blob-code blob-code-inner js-file-line">})();</td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;" data-original-text="Copy lines">Copy lines</clipboard-copy></li>
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</clipboard-copy></li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/markmarkoh/datamaps/blame/e11c513a23e1a7b836fee0605d478dc9ca176151/dist/datamaps.aus.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/markmarkoh/datamaps/issues/new">Reference in new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>



  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2019 <span title="0.28163s from unicorn-65858957f5-vmsfz">GitHub</span>, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon mr-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-l4V2g9FSA0/ox7ezT3YfzbU9oiZg6pI2nFQKi7r4DILOfFhLgKt5PwB8A/1GFjZhZ1GJRN4Q3JdoUkY3MKKOrw==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-0c8a96d3.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-Kep7hIE3nyQB1IwVNEmYQYwi63vj55mjBnTuwBU47rsUv1dGVy5eyF2k4WgDSGNg6dERjyShQ7HxXqK2avichA==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-a9676f5b.js"></script>
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark" open>
    <summary aria-haspopup="dialog" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

