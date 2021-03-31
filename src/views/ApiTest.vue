<template>
  <div id="app">
    <!-- {{data}} -->
    
    <img :src="data.src.tiny">
  </div>
</template>

<script>
export default {
    name: 'ApiTest',
    data() {
        return {
            data: {
                src: {}
            },
        }
    },
    beforeMount() {
        // this.getName();
        this.getPhoto();
    },
    methods: {
        // async getName() {

            
        //     /* Simple Request/response */
        //     const res = await fetch('https://api.agify.io/?name=michael');
        //     const data = await res.json();
        //     this.data = data;

        //     /* Request/response with check for response */
        //     // await fetch('https://api.agify.io/?name=michael').then(function(response) {
        //     //     console.log(response.status);

                
        //     // if (response.status === 404 || response.status === 200) {
        //     //     return response.json()
        //     //     console.log('aaaaa');
        //     // }
        //     // }).then(function(object) {
        //     // if (object.type === 'error') {
        //     //     console.log(object.type, object.message)
        //     // } else {
        //     //     console.log('success')
        //     // }
        //     // })
        //     // this.data = response;
        // },


            /* Photo request/response with headers */
        async getPhoto() {
            // const headers = new Headers;
            // headers.append(
            //     "Authorization",
            //     "api_key"
            // )
            // const request = new Request (
            //     "https://api.pexels.com/v1/curated?per_page=11&page=1",
            //     {
            //     method: "GET",
            //     // headers,
            //     mode: "cors",
            //     cache: "default"
            //     }
            // );

            const request = await fetch('https://api.pexels.com/v1')
            const res1 = await request;
            const {photos} = await res1.json;
            this.data = photos[0];
        }
    }
}


</script>