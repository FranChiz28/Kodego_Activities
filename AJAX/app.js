function getRequest() {
    const xhr = new XMLHttpRequest();

    
    xhr.onload = function(){
      const res = JSON.parse(xhr.responseText);
      let resPage = document.getElementById('js_output').innerHTML;
  
      output = '<div>' + '<img src="' + res[0].url + '" width="200" height="200">' + 'ID:' + res[0].id + '</div>'
      document.getElementById('js_output').innerHTML = output;
    

    }

    const apiKey = 'api_key=live_VcbaqAGCyho52KWAwPZBykvv8WOfzcLZhw45djBMdc2HKLAuvwIMlP5FhF3UGozV';
    const endpoint = 'https://api.thedogapi.com/v1/images/search';
    const dogApi = endpoint + '?' + apiKey;

    xhr.open("GET", dogApi, true);
    
    xhr.send();
  }
  
