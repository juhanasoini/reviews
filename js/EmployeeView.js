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
        alert( "OKI" );
        navigator.geolocation.getCurrentPosition(
            function(position) {
                console.log( position.coords.latitude + ',' + position.coords.longitude );
            },
            function() {
                console.log('Error getting location');
            });
        return false;
    };
    this.initialize();

}