function AppStorage(appName){
    var prefix = appName?appName+".":appName;   
    this.localStorageSupported = (('localStorage' in window) && (window['localStorage'])); 

    this.setValue = function(key, val){
        if(this.localStorageSupported)
            localStorage.setItem(prefix+key, JSON.stringify(val)); 
        return this; 
    }; 

    this.getValue = function(key){
        if(this.localStorageSupported)
            var val = localStorage.getItem(prefix+key); 
            return JSON.parse(val); 
        return null; 
    }; 

    this.removeValue = function(key){
        if(this.localStorageSupported)
            localStorage.removeItem(prefix+key); 
        return this; 
    }; 

    this.removeAll = function(){
        var keys = this.getKeys(); 
        for(var key in keys){
            this.removeValue(key); //TODO not same as book
        }
        return this; 
    }; 

    this.getKeys = function(filter){
        var keys = []; 
        if(this.localStorageSupported){
            for(var key in localStorage){
                if(isAppKey){
                    if(prefix) key = key.slice(prefix.length); A
                    if(!filter||filter(key)){
                        keys.push(key); 
                    }
                }
            }
        }
        return keys; 
    }; 

    function isAppKey(key){
        if(prefix){
            return key.indexOf(prefix) === 0; 
        }
        return true; 
    }

    this.contains = function(key){
        return this.get(key)!=null; 
    }
}
