'use strict';


/**
 *
 * language_code String Return translations depending on language code
 * player_ids String List for player IDs separated by commas. (optional)
 * season_ids String List for season IDs separated by commas. (optional)
 * team_id Integer Return only statistics for players which are currently in the specified team's squad (optional)
 * returns List
 **/
exports.statisticsPlayersGET = function(language_code,player_ids,season_ids,team_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "season" : {
    "name" : "2015/2016",
    "active" : true,
    "id" : 0
  },
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
  "tournament" : {
    "country" : {
      "code" : "code",
      "name" : "England",
      "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
      "id" : 0
    },
    "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
    "gender" : "Male",
    "name" : "Champions League",
    "regional_league" : true,
    "client_sortorder" : 1,
    "id" : 6,
    "type" : "League",
    "region" : "Regional"
  },
  "player" : {
    "name" : "Cristiano Ronaldo",
    "id" : 5,
    "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
    "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
  }
}, {
  "season" : {
    "name" : "2015/2016",
    "active" : true,
    "id" : 0
  },
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
  "tournament" : {
    "country" : {
      "code" : "code",
      "name" : "England",
      "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
      "id" : 0
    },
    "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
    "gender" : "Male",
    "name" : "Champions League",
    "regional_league" : true,
    "client_sortorder" : 1,
    "id" : 6,
    "type" : "League",
    "region" : "Regional"
  },
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
 * Bulk Upsert player statistics
 *
 * body List Array of player match statistics (optional)
 * returns List
 **/
exports.v2StatisticsPlayersMatchPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "player_id" : "player_id",
  "match_id" : "match_id",
  "origin" : "origin",
  "team_id" : "team_id",
  "statistics" : { }
}, {
  "player_id" : "player_id",
  "match_id" : "match_id",
  "origin" : "origin",
  "team_id" : "team_id",
  "statistics" : { }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve player statistics, grouped by player and season
 *
 * player_ids String CSV list of player id values (optional)
 * season_ids String CSV list of tournament season id values (optional)
 * team_id Integer Team unique identifier (optional)
 * language_code String Returns translated response based on the language code (optional)
 * returns List
 **/
exports.v2StatisticsPlayersSeasonGET = function(player_ids,season_ids,team_id,language_code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "statistics" : [ {
    "teams" : [ {
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
    }, {
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
    } ],
    "season" : {
      "name" : "name",
      "id" : "id",
      "tournament" : {
        "country" : {
          "code" : "code",
          "name" : "name",
          "id" : "id"
        },
        "gender" : "MALE",
        "name" : "name",
        "id" : "id",
        "type" : "CUP",
        "region" : "DOMESTIC"
      },
      "status" : "ACTIVE"
    },
    "player" : {
      "birthdate" : "birthdate",
      "birth_city" : {
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
    },
    "statistics" : [ {
      "name" : "name",
      "value" : "value"
    }, {
      "name" : "name",
      "value" : "value"
    } ]
  }, {
    "teams" : [ {
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
    }, {
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
    } ],
    "season" : {
      "name" : "name",
      "id" : "id",
      "tournament" : {
        "country" : {
          "code" : "code",
          "name" : "name",
          "id" : "id"
        },
        "gender" : "MALE",
        "name" : "name",
        "id" : "id",
        "type" : "CUP",
        "region" : "DOMESTIC"
      },
      "status" : "ACTIVE"
    },
    "player" : {
      "birthdate" : "birthdate",
      "birth_city" : {
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
    },
    "statistics" : [ {
      "name" : "name",
      "value" : "value"
    }, {
      "name" : "name",
      "value" : "value"
    } ]
  } ]
}, {
  "statistics" : [ {
    "teams" : [ {
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
    }, {
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
    } ],
    "season" : {
      "name" : "name",
      "id" : "id",
      "tournament" : {
        "country" : {
          "code" : "code",
          "name" : "name",
          "id" : "id"
        },
        "gender" : "MALE",
        "name" : "name",
        "id" : "id",
        "type" : "CUP",
        "region" : "DOMESTIC"
      },
      "status" : "ACTIVE"
    },
    "player" : {
      "birthdate" : "birthdate",
      "birth_city" : {
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
    },
    "statistics" : [ {
      "name" : "name",
      "value" : "value"
    }, {
      "name" : "name",
      "value" : "value"
    } ]
  }, {
    "teams" : [ {
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
    }, {
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
    } ],
    "season" : {
      "name" : "name",
      "id" : "id",
      "tournament" : {
        "country" : {
          "code" : "code",
          "name" : "name",
          "id" : "id"
        },
        "gender" : "MALE",
        "name" : "name",
        "id" : "id",
        "type" : "CUP",
        "region" : "DOMESTIC"
      },
      "status" : "ACTIVE"
    },
    "player" : {
      "birthdate" : "birthdate",
      "birth_city" : {
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
    },
    "statistics" : [ {
      "name" : "name",
      "value" : "value"
    }, {
      "name" : "name",
      "value" : "value"
    } ]
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

