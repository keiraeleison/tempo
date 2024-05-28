export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(template => {
        return {
            params: { id: template.id.toString() }
        }
    })

    return {
        paths: paths
    }
}

const Details = () => {
    return ( 
        <div>
            <h1>Details</h1>
        </div>
     );
}
 
export default Details;
