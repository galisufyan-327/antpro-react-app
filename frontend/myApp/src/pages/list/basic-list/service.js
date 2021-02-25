import request from 'umi-request';

export async function customList(params) {
    debugger
    request
    .get('/list')
    .then(function(response) {
        setList(response)
    })
    .catch(function(error) {
        console.log(error);
    });
}

 export async function postList(params) {
    request
    .post('/api/fetch', {
      data: {
        name: 'Mike',
      },
    })
    .then(function(response) {
      setPostMessage(response)
    })
    .catch(function(error) {
      console.log(error);
    });
}