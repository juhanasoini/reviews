var EmployeeView = function(adapter, template, employee) {

    this.initialize = function() {
        this.el = $('<div/>');
        this.el.on('click', '.add-location-btn', this.addLocation);
    };
    
    this.render = function() {
        this.el.html(template(employee));
        return this;
    };

    this.addLocation = function(event) {
        event.preventDefault();
        console.log( navigator.geolocation );
        
        navigator.geolocation.getCurrentPosition(
            function(position) {
                alert( position.coords.latitude + ',' + position.coords.longitude );
            },
            function() {
                alert('Error getting location');
            }, {
            enableHighAccuracy: true
              ,timeout : 5000
            });
        return false;
    };
    this.initialize();

}