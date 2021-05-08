//import Router from "next/dist/next-server/lib/router/router";
//import next from "next";
import { useRouter } from 'next/router'

/*export async function getStaticPaths() {
    return {
        paths: [{
            params: {
                id: '1'
            }
        },{
            params: {
                id: '2'
            }
        }],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    await delay(5000);
    const id = context.params.id;

    return {
        props: {
            id: id
        }
    }
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

*/


function Produtos(props) {
    const router = useRouter();
    const id = router.query.id;

    return <div>Id do produto: {id}</div>

    //return <div>Id do produto: {props.id}</div>
}

export default Produtos;
