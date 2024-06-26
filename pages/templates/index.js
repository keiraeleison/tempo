import Head from "next/head";
import styles from '../../styles/Templates.module.css'
import Link from "next/link";

// fetches data in build time!
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { templates: data}
    }
}

const Templates = ({ templates }) => {
    return ( 
        <>
            <Head>
                <title>Template List | Templates </title>
                <meta name="keywords" content="templates" />
            </Head>
            <div>
                <h1>All Templates</h1>
                {templates.map(template => (
                    <Link legacyBehavior key={template.id} href={ '/templates/' + template.id } >
                        <a className={styles.single}>
                            <h3>{template.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
     );
}
 
export default Templates;
