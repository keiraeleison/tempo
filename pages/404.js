import Link from "next/link"
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from "next/head"

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        console.log("use effect ran")
        setTimeout(() => {
            //router.go(-1)       // redirect to last page from history
            router.push('/');    // redirect to the homepage
        }, 3000)
    }, []);

    return ( 
        <>
            <Head>
            <title>Template List | Home </title>
            <meta name="keywords" content="templates" />
        </Head>
            <div className="not-found">
                <h1>Oooops...</h1>
                <h2>That page cannot be found.</h2>
                <p>Go back to the <Link legacyBehavior href="/"><a>Homepage</a></Link></p>
            </div>
        </>
     );
}
 
export default NotFound;
