'use strict';


/**
 * Search player list by parameters
 *
 * name String Filter players by names. Length must be >= 4. The filter matches on a per word basis. If you query for 'Ronaldo' it will match both 'Cristiono Ronaldo' and 'Ronaldo'
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * max_results Integer Limit the number of results returned (optional)
 * team_id Integer Return only players which are currently in the specified team's squad (optional)
 * returns List
 **/
exports.playersGET = function(name,acceptLanguage,max_results,team_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "country" : {
    "code" : "code",
    "name" : "England",
    "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
    "id" : 0
  },
  "birthdate" : "1985-02-05T00:00:00.000+00:00",
  "gender" : "MALE",
  "name" : "Cristiano Ronaldo",
  "last_name" : "Ronaldo",
  "active" : true,
  "position" : "keeper",
  "id" : 0,
  "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
  "first_name" : "Cristiano",
  "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
}, {
  "country" : {
    "code" : "code",
    "name" : "England",
    "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
    "id" : 0
  },
  "birthdate" : "1985-02-05T00:00:00.000+00:00",
  "gender" : "MALE",
  "name" : "Cristiano Ronaldo",
  "last_name" : "Ronaldo",
  "active" : true,
  "position" : "keeper",
  "id" : 0,
  "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
  "first_name" : "Cristiano",
  "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get information about a specific Player
 *
 * id String Unique identifier of the resource.
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * expand String Specify additional information to include in the response (optional)
 * returns PlayerProfile
 **/
exports.playersIdGET = function(id,acceptLanguage,expand) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "club" : {
    "end_date" : "2016-06-21T00:00:00.000+00:00",
    "active" : true,
    "start_date" : "2015-06-20T00:00:00.000+00:00"
  },
  "position_display" : "position_display",
  "current_league" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns statistics throughout a Player's career
 *
 * id String Unique identifier of the resource.
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * type String Filter statistics for different types of team and competition (optional)
 * group_by String Group response by a given property (optional)
 * returns List
 **/
exports.playersIdStatisticsGET = function(id,acceptLanguage,type,group_by) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "shirtNumber" : 0,
  "tournament_season" : "",
  "team" : {
    "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
    "gender" : "MALE",
    "undecided" : true,
    "name" : "Real Madrid",
    "national" : true,
    "threeLetterCode" : "RMA",
    "id" : 6,
    "shortName" : "Loko Plovdiv",
    "type" : "placeholder"
  },
  "position" : "position",
  "player" : {
    "name" : "Cristiano Ronaldo",
    "id" : 5,
    "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
    "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
  }
}, {
  "shirtNumber" : 0,
  "tournament_season" : "",
  "team" : {
    "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
    "gender" : "MALE",
    "undecided" : true,
    "name" : "Real Madrid",
    "national" : true,
    "threeLetterCode" : "RMA",
    "id" : 6,
    "shortName" : "Loko Plovdiv",
    "type" : "placeholder"
  },
  "position" : "position",
  "player" : {
    "name" : "Cristiano Ronaldo",
    "id" : 5,
    "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
    "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the Teams in which a Player has participated during his career
 *
 * id String Unique identifier of the resource.
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * returns List
 **/
exports.playersIdTeamsGET = function(id,acceptLanguage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "end_date" : "2016-06-21T00:00:00.000+00:00",
  "active" : true,
  "start_date" : "2015-06-20T00:00:00.000+00:00"
}, {
  "end_date" : "2016-06-21T00:00:00.000+00:00",
  "active" : true,
  "start_date" : "2015-06-20T00:00:00.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Search player list by parameters
 *
 * offset Integer The number of items to skip before starting to collect the result set
 * limit Integer Limit the number of results returned
 * language_code String Returns translated response based on the language code (optional)
 * returns PlayerPageDto
 **/
exports.v2PlayersGET = function(offset,limit,language_code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "players" : [ {
    "country" : {
      "code" : "code",
      "name" : "name",
      "id" : "id"
    },
    "birthdate" : "birthdate",
    "birth_city" : {
      "country" : {
        "code" : "code",
        "name" : "name",
        "id" : "id"
      },
      "name" : "name",
      "id" : "id"
    },
    "gender" : "MALE",
    "social" : {
      "wikipedia_id" : "wikipedia_id",
      "web" : "web",
      "youtube_channel_id" : "youtube_channel_id",
      "twitter_id" : "twitter_id",
      "facebook_id" : "facebook_id",
      "instagram_id" : "instagram_id"
    },
    "profile" : {
      "weight" : "weight",
      "height" : "height"
    },
    "name" : "name",
    "active" : true,
    "id" : "id",
    "position" : "position"
  }, {
    "country" : {
      "code" : "code",
      "name" : "name",
      "id" : "id"
    },
    "birthdate" : "birthdate",
    "birth_city" : {
      "country" : {
        "code" : "code",
        "name" : "name",
        "id" : "id"
      },
      "name" : "name",
      "id" : "id"
    },
    "gender" : "MALE",
    "social" : {
      "wikipedia_id" : "wikipedia_id",
      "web" : "web",
      "youtube_channel_id" : "youtube_channel_id",
      "twitter_id" : "twitter_id",
      "facebook_id" : "facebook_id",
      "instagram_id" : "instagram_id"
    },
    "profile" : {
      "weight" : "weight",
      "height" : "height"
    },
    "name" : "name",
    "active" : true,
    "id" : "id",
    "position" : "position"
  } ],
  "page_meta" : {
    "total" : 6,
    "offset" : 1,
    "limit" : 5
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update the active clubs of a player
 *
 * body V2_ActiveClubsInput Active clubs input (optional)
 * id String Unique identifier of the resource.
 * returns List
 **/
exports.v2PlayersIdClubsActivePUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "contract_type" : "contract_type",
  "team" : {
    "three_letter_code" : "three_letter_code",
    "venue" : {
      "profile" : {
        "lng" : 6.0274563,
        "lat" : 0.8008282,
        "capacity" : 1
      },
      "name" : "name",
      "id" : "id"
    },
    "gender" : "MALE",
    "social" : {
      "wikipedia_id" : "wikipedia_id",
      "web" : "web",
      "twitter_id" : "twitter_id",
      "facebook_id" : "facebook_id",
      "instagram_id" : "instagram_id"
    },
    "name" : "name",
    "founded" : 5,
    "short_name" : "short_name",
    "id" : "id",
    "type" : "PLACEHOLDER"
  },
  "shirt_number" : "shirt_number",
  "start_date" : "start_date",
  "status" : "ACTIVE"
}, {
  "contract_type" : "contract_type",
  "team" : {
    "three_letter_code" : "three_letter_code",
    "venue" : {
      "profile" : {
        "lng" : 6.0274563,
        "lat" : 0.8008282,
        "capacity" : 1
      },
      "name" : "name",
      "id" : "id"
    },
    "gender" : "MALE",
    "social" : {
      "wikipedia_id" : "wikipedia_id",
      "web" : "web",
      "twitter_id" : "twitter_id",
      "facebook_id" : "facebook_id",
      "instagram_id" : "instagram_id"
    },
    "name" : "name",
    "founded" : 5,
    "short_name" : "short_name",
    "id" : "id",
    "type" : "PLACEHOLDER"
  },
  "shirt_number" : "shirt_number",
  "start_date" : "start_date",
  "status" : "ACTIVE"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get player by id
 *
 * id String Unique identifier of the resource.
 * language_code String Returns translated response based on the language code (optional)
 * returns v2_PlayerProfile
 **/
exports.v2PlayersIdGET = function(id,language_code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : {
    "code" : "code",
    "name" : "name",
    "id" : "id"
  },
  "birthdate" : "birthdate",
  "birth_city" : {
    "name" : "name",
    "id" : "id"
  },
  "teams" : [ {
    "contract_type" : "contract_type",
    "team" : {
      "three_letter_code" : "three_letter_code",
      "venue" : {
        "profile" : {
          "lng" : 6.0274563,
          "lat" : 0.8008282,
          "capacity" : 1
        },
        "name" : "name",
        "id" : "id"
      },
      "gender" : "MALE",
      "social" : {
        "wikipedia_id" : "wikipedia_id",
        "web" : "web",
        "twitter_id" : "twitter_id",
        "facebook_id" : "facebook_id",
        "instagram_id" : "instagram_id"
      },
      "name" : "name",
      "founded" : 5,
      "short_name" : "short_name",
      "id" : "id",
      "type" : "PLACEHOLDER"
    },
    "shirt_number" : "shirt_number",
    "start_date" : "start_date",
    "status" : "ACTIVE"
  }, {
    "contract_type" : "contract_type",
    "team" : {
      "three_letter_code" : "three_letter_code",
      "venue" : {
        "profile" : {
          "lng" : 6.0274563,
          "lat" : 0.8008282,
          "capacity" : 1
        },
        "name" : "name",
        "id" : "id"
      },
      "gender" : "MALE",
      "social" : {
        "wikipedia_id" : "wikipedia_id",
        "web" : "web",
        "twitter_id" : "twitter_id",
        "facebook_id" : "facebook_id",
        "instagram_id" : "instagram_id"
      },
      "name" : "name",
      "founded" : 5,
      "short_name" : "short_name",
      "id" : "id",
      "type" : "PLACEHOLDER"
    },
    "shirt_number" : "shirt_number",
    "start_date" : "start_date",
    "status" : "ACTIVE"
  } ],
  "gender" : "MALE",
  "social" : {
    "wikipedia_id" : "wikipedia_id",
    "web" : "web",
    "youtube_channel_id" : "youtube_channel_id",
    "twitter_id" : "twitter_id",
    "facebook_id" : "facebook_id",
    "instagram_id" : "instagram_id"
  },
  "profile" : {
    "weight" : "weight",
    "height" : "height"
  },
  "name" : "name",
  "active" : true,
  "id" : "id",
  "position" : "position"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Player information
 *
 * body PlayerEditDto Player information to save in persistance
 * id String Unique identifier of the resource.
 * no response value expected for this operation
 **/
exports.v2PlayersIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Store a newly created player in storage.
 *
 * body PlayerEditDto PlayerEditDto object (optional)
 * returns PlayerDto
 **/
exports.v2PlayersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : {
    "code" : "code",
    "name" : "name",
    "id" : "id"
  },
  "birthdate" : "birthdate",
  "birth_city" : {
    "country" : {
      "code" : "code",
      "name" : "name",
      "id" : "id"
    },
    "name" : "name",
    "id" : "id"
  },
  "gender" : "MALE",
  "social" : {
    "wikipedia_id" : "wikipedia_id",
    "web" : "web",
    "youtube_channel_id" : "youtube_channel_id",
    "twitter_id" : "twitter_id",
    "facebook_id" : "facebook_id",
    "instagram_id" : "instagram_id"
  },
  "profile" : {
    "weight" : "weight",
    "height" : "height"
  },
  "name" : "name",
  "active" : true,
  "id" : "id",
  "position" : "position"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

