 const emailFormate = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 0;
      }

      .container {
        max-width: 600px;
        margin: 20px auto;
      }
      .ol {
        margin-left: 20px;
      }
      h1 {
        font-size: 17px;
      }

      .footer {
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Dear User,</h1>
      <p>
        Thank you for choosing Coveten Technologies as your gateway for all your
        industrial needs. We are thrilled to have you on board
      </p>

      <div class="ol" type="1">
        <p>
          1. Your registration is important to us. Our team is currently
          verifying the information you provided to ensure accuracy and
          security; your approval process will be completed within 24 hrs
        </p>

        <p>
          2. Once your account is successfully reviewed and approved, you can
          build up your complete profile to explore many exciting opportunities
          in the industrial world.
        </p>

        <p>
          3. You can still send your inquiries using the "INQUIRY" form on your
          right-hand side in the portal.
        </p>
      </div>

      <p>
        Quick assistance please write us on:
        <a href="mailto:contact@coveten.com">contact@coveten.com</a>
      </p>

      <p class="footer">Best regards,<br />Coveten Technologies Team</p>

      <img
        src="https://firebasestorage.googleapis.com/v0/b/coventen-9444b.appspot.com/o/email%2Fder.png?alt=media&token=1bc29092-4d1f-4df0-8c8c-3bffdb5e0221"
        alt="email footer"
        class="footerImage"
      />
    </div>
  </body>
</html>

`;

export default emailFormate;