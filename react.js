 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Map Your Life!</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Merriweather|Open+Sans" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Oleo+Script+Swash+Caps" rel="stylesheet">
    <!-- Style -->
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- Viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Firebase -->
    <script src="https://www.gstatic.com/firebasejs/live/3.0/firebase.js"></script>
    <!-- Javascript -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>



                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree"><span class="glyphicon glyphicon-cutlery">
                            </span> Nearby Restaurants</a> 
                        </h4>
                    </div>
                    <div id="collapseThree" class="panel-collapse collapse">
                        <div class="panel-body">
                            <form class="search-form">
                                <label for="sel1">Select a category</label>
                                <select class="form-control" id="sel1">
                                    <option>Burger Joint</option>
                                    <option>Pizza Place</option>
                                    <option>Sandwich Place</option>
                                    <option>Steakhouse</option>
                                    <option>Food Trucks</option>
                                    <option>Fast Food</option>
                                    <option>BBQ</option>
                                    <option>Mexican Restaurant</option>
                                    <option>Indian Restaurant</option>
                                    <option>Chinese Restaurant</option>
                                    <option>Japanese Restaurant</option>
                                    <option>Korean Restaurant</option>
                                    <option>Vietnamese Restaurant</option>
                                    <option>Ice Cream Shop</option>
                                    <option>Bubble Tea</option>
                                    <option>Coffee Shop</option>
                                    <option>Dessert Shop</option>
                                    <option>Pet Cafe</option>
                                </select>
                            </form>
                            <form class="number-form">
                                <label for="byNumberInput">Number of locations to retrieve (default 10):</label><br>
                                <input type="number" name="numberSearch" class="form-control" id="numRecords1">
                            </form>
                            <form class="radius-form">
                                <label for="byRadiusInput">Radius of Search (in meters)</label><br>
                                <input type="number" name="ratingSearch" class="form-control" id="searchRadius1">
                            </form>
                            <br>
                            <input id="findSearchRestaurants" type="submit" value="Search">
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour"><span class="glyphicon glyphicon-flag">
                            </span> Family Lifestyle</a> 
                        </h4>
                    </div>
                    <div id="collapseFour" class="panel-collapse collapse">
                        <div class="panel-body">
                            <form class="search-form">
                                <label for="sel2">Select a category</label>
                                <select class="form-control" id="sel2">
                                    <option>Arcade</option>
                                    <option>Theme Park</option>
                                    <option>Water Park</option>
                                    <option>Zoo</option>
                                    <option>Aquarium</option>
                                    <option>Museum</option>
                                    <option>Performing Arts Venue</option>
                                    <option>Indoor Play Area</option>
                                    <option>Park</option>
                                    <option>Playground</option>
                                    <option>Elementary School</option>
                                    <option>Middle School</option>
                                    <option>High School</option>
                                    <option>Bowling Alley</option>
                                    <option>Laser Tag</option>
                                    <option>Mini Golf</option>
                                    <option>Roller Rink</option>
                                    <option>Dog Run</option>
                                    <option>Recreation Center</option>
                                    <option>Bike Trail</option>
                                    <option>Botanical Garden</option>
                                    <option>Campground</option>
                                    <option>Historic Site</option>
                                </select>
                            </form>
                            <form class="number-form">
                                <label for="byNumberInput">Number of locations to retrieve (default 10):</label><br>
                                <input type="number" name="numberSearch" class="form-control" id="numRecords2">
                            </form>
                            <form class="radius-form">
                                <label for="byRadiusInput">Radius of Search (in meters)</label><br>
                                <input type="number" name="ratingSearch" class="form-control" id="searchRadius2">
                            </form>
                            <br>
                            <input id="findSearchFamily" type="submit" value="Search">
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseFive"><span class="glyphicon glyphicon-tree-conifer">
                            </span> Healthy Lifestyle</a> 
                        </h4>
                    </div>
                    <div id="collapseFive" class="panel-collapse collapse">
                        <div class="panel-body">
                            <form class="search-form">
                                <label for="sel3">Select a category</label>
                                <select class="form-control" id="sel3">
                                    <option>Gluten-free Restaurant</option>
                                    <option>Juice Bar</option>
                                    <option>Salad Place</option>
                                    <option>Sandwich Place</option>
                                    <option>Vegetarian / Vegan Restaurant</option>
                                    <option>Gym</option>
                                    <option>Recreation Center</option>
                                    <option>Pilates Studio</option>
                                    <option>Cycle Studio</option>
                                    <option>Yoga Studio</option>
                                    <option>Martial Arts Dojo</option>
                                    <option>Sports Club</option>
                                    <option>Soccer Field</option>
                                    <option>Volleyball Court</option>
                                    <option>Beach</option>
                                    <option>Trail</option>
                                    <option>Bike Trail</option>
                                </select>
                            </form>
                            <form class="number-form">
                                <label for="byNumberInput">Number of locations to retrieve (default 10):</label><br>
                                <input type="number" name="numberSearch" class="form-control" id="numRecords3">
                            </form>
                            <form class="radius-form">
                                <label for="byRadiusInput">Radius of Search (in meters)</label><br>
                                <input type="number" name="ratingSearch" class="form-control" id="searchRadius3">
                            </form>
                            <br>
                            <input id="findSearchHealthy" type="submit" value="Search">
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseSix"><span class="glyphicon glyphicon-education">
                            </span> Professional Places</a> 
                        </h4>
                    </div>
                    <div id="collapseSix" class="panel-collapse collapse">
                        <div class="panel-body">
                            <form class="search-form">
                                <label for="sel4">Select a category</label>
                                <select class="form-control" id="sel4">
                                    <option>Police Station</option>
                                    <option>Business Center</option>
                                    <option>Convention Center</option>
                                    <option>Hospital</option>
                                    <option>Veterinarian</option>
                                    <option>Animal Shelter</option>
                                    <option>Office</option>
                                    <option>Parking</option>
                                    <option>Post Office</option>
                                    <option>Social Club</option>
                                    <option>Spiritual Center</option>
                                    <option>Bank</option>
                                    <option>Clothing Store</option>
                                    <option>Department Store</option>
                                    <option>Drug Store</option>
                                    <option>Supermarket</option>
                                </select>
                            </form>
                            <form class="number-form">
                                <label for="byNumberInput">Number of locations to retrieve (default 10):</label><br>
                                <input type="number" name="numberSearch" class="form-control" id="numRecords4">
                            </form>
                            <form class="radius-form">
                                <label for="byRadiusInput">Radius of Search (in meters)</label><br>
                                <input type="number" name="ratingSearch" class="form-control" id="searchRadius4">
                            </form>
                            <br>
                            <input id="findSearchPro" type="submit" value="Search">
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseSeven"><span class="glyphicon glyphicon-glass">
                            </span> Nightlife</a> 
                        </h4>
                    </div>
                    <div id="collapseSeven" class="panel-collapse collapse">
                        <div class="panel-body">
                            <form class="search-form">
                                <label for="sel5">Select a category</label>
                                <select class="form-control" id="sel5">
                                    <option>Casino</option>
                                    <option>Music Venue</option>
                                    <option>Pool Hall</option>
                                    <option>Drive-in Theatre</option>
                                    <option>Lounge</option>
                                    <option>NightClub</option>
                                    <option>Beach Bar</option>
                                    <option>Cocktail Bar</option>
                                    <option>Gay Bar</option>
                                    <option>Hookah Bar</option>
                                    <option>Karaoke Bar</option>
                                    <option>Sports Bar</option>
                                    <option>Night Market</option>
                                    <option>Strip Club</option>
                                </select>
                            </form>
                            <form class="number-form">
                                <label for="byNumberInput">Number of locations to retrieve (default 10):</label><br>
                                <input type="number" name="numberSearch" class="form-control" id="numRecords5">
                            </form>
                            <form class="radius-form">
                                <label for="byRadiusInput">Radius of Search (in meters)</label><br>
                                <input type="number" name="ratingSearch" class="form-control" id="searchRadius5">
                            </form>
                            <br>
                            <input id="findSearchNight" type="submit" value="Search">
                        </div>
                    </div>
                </div>