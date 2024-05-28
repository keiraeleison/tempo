import Head from "next/head";
import Link from "next/link"

const Contact  = () => {
    return (
        <div>
            <Head>
                <title>Template List | Contact </title>
            </Head>
            <dev>
                <h2>Contact</h2>
                <div>
                    <p>Me about anything else <Link href="/contact">contact@github.com</Link></p>
                </div>
            </dev>
        </div>
      );
}
 
export default Contact;
