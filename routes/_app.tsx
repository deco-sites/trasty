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
      </Head>

      {/* Rest of Preact tree */}
      <ctx.Component />
    </>
  );
});
