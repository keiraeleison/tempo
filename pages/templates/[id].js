export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(template => {
        return {
            params: { id: template.id.toString() }
        }
    })

    return {
        paths, // paths: paths
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { template: data}
    }
}

const Details = ({ template }) => {
    return ( 
        <div>
            <h1>{ template.name }</h1>
            <p>{ template.email }</p>
            <p>{ template.website }</p>
            <p>{ template.address.city }</p>
        </div>
     );
}
 
export default Details;
