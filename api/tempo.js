async function tempo(request, response) {
    const apiSecret = process.env.COUTER_API_SECRET;
    const dynamicDate = new Date();

    const subscribersResponse = await fetch(`https://api.countapi.xyz/get/com.mvm/${apiSecret}`);
    const subscribersResponseJson = await subscribersResponse.json();
    const acessos = subscribersResponseJson.payload;

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString(),
        inscritos: acessos
    });
}

export default tempo;