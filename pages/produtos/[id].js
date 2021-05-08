//import { useRouter } from 'next/router'
//import Router from "next/dist/next-server/lib/router/router";
//import next from "next";


export async function getStaticPaths() {
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
    //fallback ('blocking' / true / false)
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


/*
export async function getServerSideProps(context){

    const id = context.query.id;

    return{
        props: {
            id: id
        }
    }

}
*/
function Produtos(props) {
    //
    //const router = useRouter()
    //const { id } = router.query

    //return <p>Produto: {id}</p>
    return <div>Id do produto: {props.id}</div>
}

export default Produtos;
