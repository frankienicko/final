var daysofweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var MonthsNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function Month(month,yeardates = {}) {
	this.date = new Date(year,month,0);
	this.numberofdays = this.date.getDate();
	this.nameofmonth = MonthNames[this.date.getMonth()];
	this.firstday = 1;
	this.year = this.date.getFullYear();
	this.calendar = generateCalendar(this.numberofdays,month-1,this.firstday,year,{});
	console.log(this.calendar)
}

function Date2Day(year,month,day) {
	//this is to determine the week day based on the date
	return (new Date(year,month,day)).getDay();
}
function generateCalendar(numberofdays,month,day,year,dates = {}) {
	//this generates an array ofweek day objects which have array of days (in numbers)
	var WEEKDAY = MonthsNames[Date2Day(month,day,year)];
	if(WEEKDAY in dates) {dates[WEEKDAY].push(day)}
		else{dates[WEEKDAY] = [day]}
			day++;
		return day > numberofdays ? dates : generateCalendar(numberofdays,month,day,year);
}


var Calendar = React.createClass({
	getInitialState:function(){return {dates:this.generateCalendar{}}},
	generateCalandar:function() {
		var month = {};
		month = new Month(1,2017,month);
		console.log(month)
		return month;
	},
	render:function() {
		var calendar =[];
			for(var property in this.state.dates.calendar) {
				calendar.push(this.state.dates.calendar[property])
		}
		return (
			<div id="Calendar">
				<div id="header">
					<i className="fa fa-bars" aria-hidden="true"></i>
				<p className="nopaddingnomargin">{this.state.dates.nameofmonth} {this.state.dates.year}</p>
				<i className="fa fa-calendar-check-o" aria-hidden="true"></i>
				<i className="fa fa-search" aria-hidden="true"></i>
			</div>
			<div id = "dates"></div>
			{calendar.map(function(week,i) {
				return (
					<div>
						<p className="weekname">{daysOfWeek[i]}</p>
						<ul className="nopaddingnomargin">
						{week.map(function(day,k) {
							return <li>{day}</li>
						})}
					</ul>
			</div>
				)		
			})}
			</div>

})

ReactDOM.render(<Calendar/>,document.getElementByID("space"))