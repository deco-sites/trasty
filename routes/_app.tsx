import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import { Context } from "deco/deco.ts";
import Theme from "../sections/Theme/Theme.tsx";

export default defineApp(async (_req, ctx) => {
  const revision = await Context.active().release?.revision();

  return (
    <>
      {/* Include default fonts and css vars */}
      <Theme colorScheme="any" />

      {/* Include Icons and manifest */}
      <Head>
        <script type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
        </script>
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
  (function(){
    emailjs.init({
      publicKey: "tmKMu4QTTuGaOohNF",
     });
   })();
  `
        }}>
        </script>
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://analytics.trasty.io/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NP7Q86QP');
        `
        }}>
        </script>
        <style
          dangerouslySetInnerHTML={{
            __html: `
             @font-face {
                font-family: 'Objective';
                font-style: italic;
                font-weight: 900;
                font-display: swap;
                src: url(/fonts/Objective-Black-Italic.otf) format('opentype');
              }  
             @font-face {
                font-family: 'Objective';
                font-style: normal;
                font-weight: 900;
                font-display: swap;
                src: url(/fonts/Objective-Black.otf) format('opentype');
              }  
             @font-face {
                font-family: 'Objective';
                font-style: italic;
                font-weight: 800;
                font-display: swap;
                src: url(/fonts/Objective-ExtraBold-Italic.otf) format('opentype');
              }  
            @font-face {
                font-family: 'Objective';
                font-style: normal;
                font-weight: 800;
                font-display: swap;
                src: url(/fonts/Objective-ExtraBold.otf) format('opentype');
              }  
                @font-face {
                font-family: 'Objective';
                font-style: italic;
                font-weight: 700;
                font-display: swap;
                src: url(/fonts/Objective-Bold-Italic.otf) format('opentype');
              }
            @font-face {
                font-family: 'Objective';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url(/fonts/Objective-Bold.otf) format('opentype');
              }
              @font-face {
                font-family: 'Objective';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: url(/fonts/Objective-Medium.otf) format('opentype');
                }
                  @font-face {
                    font-family: 'Objective';
                    font-style: normal;
                    font-weight: 400;
                    font-display: swap;
                    src: url(/fonts/Objective-Regular.otf) format('opentype');
                  }
                @font-face {
                font-family: 'Objective';
                font-style: italic;
                font-weight: 300;
                font-display: swap;
                src: url(/fonts/Objective-Light-Italic.otf) format('opentype');
              }
              @font-face {
                font-family: 'Objective';
                font-style: normal;
                font-weight: 300;
                font-display: swap;
                src: url(/fonts/Objective-Light.otf) format('opentype');
              }
                @font-face {
                font-family: 'Objective';
                font-style: normal;
                font-weight: 100;
                font-display: swap;
                src: url(/fonts/Objective-Thin.otf) format('opentype');
              }
            `,
          }}
        />
        {/* Enable View Transitions API */}
        <meta name="view-transition" content="same-origin" />

        {/* Tailwind v3 CSS file */}
        <link
          href={asset(`/styles.css?revision=${revision}`)}
          rel="stylesheet"
        />

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
                  var _ss = _ss || [];
                  _ss.push(['_setDomain', 'https://koi-3SHYFJ5C44.marketingautomation.services/net']);
                  _ss.push(['_setAccount', 'KOI-1FZ71Z4X28ASSO']);
                  _ss.push(['_trackPageView']);
                  (function() {
                      var ss = document.createElement('script');
                      ss.type = 'text/javascript'; ss.async = true;
                      ss.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'koi-3SHYFJ5C44.marketingautomation.services/client/ss.js?ver=2.4.0';
                      var scr = document.getElementsByTagName('script')[0];
                      scr.parentNode.insertBefore(ss, scr);
                  })();
                  if ("onhashchange" in window) {
                      window.onhashchange = function () {
                          _ss.push(['_trackPageView']);
                      }
                  } else {
                      var prevHash = window.location.hash;
                      window.setInterval(function () {
                          if (window.location.hash != prevHash) {
                              prevHash = window.location.hash;
                              _ss.push(['_trackPageView']);
                          }
                      }, 100);
                  }
                  `
        }}>
        </script>
      </Head>

      {/* Rest of Preact tree */}
      <ctx.Component />
      <noscript><iframe src="https://analytics.trasty.io/ns.html?id=GTM-NP7Q86QP" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    </>
  );
});
