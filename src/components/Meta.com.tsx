import Head from 'next/head';
import { useRouter } from 'next/router';

type Props = {
    title?: string;
    description?: string;
    image?: string;
};

const DOMAIN_NAME = "Tamoki Loi";
const IMAGE_LOGO_LINK = `/assets/images/l-icon.png`;
const TITLE = `Porfolio - Tamoki Loi`;
const DESCRIPTION = `This is porfolio website of Tamoki Loi`;

const htmlToText = (html: string) => {
    html = html.replace(/<style([\s\S]*?)<\/style>/gi, "");
    html = html.replace(/<script([\s\S]*?)<\/script>/gi, "");
    html = html.replace(/<\/div>/gi, "");
    html = html.replace(/<\/li>/gi, "");
    html = html.replace(/<li>/gi, "");
    html = html.replace(/<\/ul>/gi, "");
    html = html.replace(/<\/p>/gi, "");
    html = html.replace(/<br\s*[\/]?>/gi, "");
    html = html.replace(/<[^>]+>/gi, "");
    html = html.replace(/&lt;br&gt;/g, "");
    return html;
};

function Meta({ title = '', description = '', image }: Props) {
    const router = useRouter();
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
                <title>{title || TITLE}</title>
                <meta property="og:type" content="website" />
                <meta name="og:title" property="og:title" content={title} />
                <meta
                    name="og:description"
                    property="og:description"
                    content={htmlToText(description) || DESCRIPTION}
                />
                <meta name="description" content={htmlToText(description) || DESCRIPTION} />
                <meta property="og:site_name" content={DOMAIN_NAME} />
                {/* <meta property="og:url" content={`${DOMAIN_HTTPS}${router.asPath}`} /> */}
                <meta name="twitter:card" content={DOMAIN_NAME} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={htmlToText(description) || DESCRIPTION} />
                <meta name="twitter:site" content={DOMAIN_NAME} />
                <meta name="twitter:creator" content={DOMAIN_NAME} />
                {image ? (
                    <meta property="og:image" content={`${image}`} />
                ) : (
                    <meta property="og:image" content={IMAGE_LOGO_LINK} />
                )}
                {image && <meta name="twitter:image" content={`${image}`} />}
                <link rel="icon" type="image/png" href="/assets/images/l-icon-dark.jpeg" />
            </Head>
        </>
    );
}

export default Meta;