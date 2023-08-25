function getRequest() {
    const xhr = new XMLHttpRequest();

    
    xhr.onload = function(){
      if (this.status == 200) {
      const res = JSON.parse(xhr.responseText);

      for (let i in res){
        let output;
        output += '<div>' + '<img src="' + res[i].url + '" width="200" height="200"><br>' + 'ID:' + res[i].id + '</div>'
      document.getElementById('js_output').innerHTML = output;
      }
    }
  }

    const apiKey = 'api_key=live_VcbaqAGCyho52KWAwPZBykvv8WOfzcLZhw45djBMdc2HKLAuvwIMlP5FhF3UGozV';
    const endpoint = 'https://api.thedogapi.com/v1/images/search?limit=10';
    const dogApi = endpoint + '?' + apiKey;

    xhr.open("GET", endpoint, true);
    
    xhr.send();
  }
  
