export default function Tracking() {
  return (
    <div>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=UA-96546414-3`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-96546414-3', { page_path: window.location.pathname});
          `,
        }}
      />
    </div>
  );
}
