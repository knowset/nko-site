import { google } from "googleapis";

const gapi = {
    type: "service_account",
    project_id: "test-update-images",
    private_key_id: "25108c15873760a5586e49161778af883bd37813",
    private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC0HSdFU/w65Suf\nf8XTczfqSdlYzgmFezPwqEBOoaRmQ0pDRm9cMJmeXedK7j7lGHRyazY8/5LhCcB3\nWo/Jgy1b0/S1W5Lj0K0i8fUoyYDl2VeIw0TTWmUQpb31ItxuhsW2H6TR8luQ3HvF\nnvrX7/NXI8QVX06jsdOaisGcfIa3fH6gXXUpq95gnoHvK3ByuAu90Ol8K3SdZKOP\nkt4gAYYpktHEKDhDSyS/BWG3gpHrx4vhBcodd+/bX35b9MxWAQP8a77AKgZ48bgX\n4Bq1JOdEFYuYOTRz8FDAhNXasxLEs3PjVEoWPEgb/O+unnb7jAoHc4mkRA0HtkAe\nhIe39nmDAgMBAAECggEAA2scOtzIXZEfk1Q4USDk2khS3N8diiWCS6/TIfWVFQXI\n697zL8jnrtGcbq0ij3Q33ZC7A6GxdsjvGLTPeXpztW71PC3ule6jd+rSBYH8NXXl\ntehILvS5FKhN+HrpZnBIt1dWvaSqZ+TvX8WlKs0DOCUAdza1sOCn900T4KBHvvAQ\nnx2E1rfrLfvHB7EKmW16xWQmsdGI7MQruRBXwV9aPQNNwac61Yvagt5Th2etbNYd\nTHTWRNafjGO0k6DctHrFF8FfrWF4dKgoOdDZGUZR7sKNsIJYttMxYQNYUOFXs9HM\ntIEj5CeugNbHpWRGQWHmI7ozh9L1R1owabBro3XQmQKBgQDgk7M7SN2Gwd6UwiER\n7a9NjZ8f0EEr7NjMdVRxJ4O86dVMHA2lsSrd1wVdZ8vt30yjGhOt9gZrNU4Iz36i\nxS15nl2/B8BFapOuH13RTSpXYIB6o5Xw8DVtDmLEiEyR4UDKT6v8cfoxRw/eK/9z\n0O1Un9N2qAPI4c6ekIvm6x/gOwKBgQDNUMuT3579zUXXQ1KM7/kpuBU6+qkyOmN3\n5h/vAG1mqCYOHv/RswSVPe1X0ycV09akDfVbTaT2BBuepJ+H/7tO2OYnOAXC82qm\n8d+Sr3tk5DPc+W7E5x+ppddJ+kdfwM1I4kbEreqekA6M/5oK4vblXjmPMJCU5qhS\nlLHLZOk/WQKBgEw08qoYdMvIt94k7hHmZQldGHU0NxlPutXOrsPjE8okUzQLhPoH\n37L9xx1GHqZuktP6AlmS1eTFZuCIgMF9RYwymD89wxoLK2f3zt86XzbdUVvMbRIg\ngRCrxApK8ijCljjQxlzY1HyqT5Elvv6vFAoWXiyyoO4m6fVWuZK3kM6HAoGARYBp\nOaiEYLQhRUpz4mPFu7ql7S43Ilqjm03aV4SUhCC9qSATR0BLd93bv1QqMfhg+24C\nNaMmCWXAl8ZwfpAyLvG7j2EmiiTuYI8WOMiQg8nASLhjJ+J5VGtgYpmHmcFhfJ+k\nhyW8e2qWkmJgGflUzLZF09QDzXP7XOEbApgpYRkCgYA5pv6ZpvVMcZFJJ90T2O+x\n88vAmhrbQvnzc1lxpA19a4fsSRNC3ZskFfWtx6X+56gKWtdpAKDXJaI5QgsN1QyM\nojrmYubquKh6zKeDHnDsWO7SZF4eOdQnDfUCAkOJnJCOtYto0oejMqpdNOk3JkaZ\ncniq4DM9W3HobAp7PRHIOg==\n-----END PRIVATE KEY-----\n",
    client_email:
        "text-upload-image@test-update-images.iam.gserviceaccount.com",
    client_id: "113134475381632462664",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/text-upload-image%40test-update-images.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
};

const auth = new google.auth.GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/drive"],
    credentials: gapi,
});

const driveService = google.drive({
    version: "v3",
    auth,
});

export default driveService;
