'use strict';


/**
 * Get lineup information. Includes players, formation and coach
 *
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * last_update Date Filter lineups which have updates only after the specified time (optional)
 * returns List
 **/
exports.lineupsGET = function(acceptLanguage,last_update) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "event_id" : 0,
  "home_team" : {
    "players" : [ {
      "position_x" : 10,
      "position_y" : 5,
      "position_number" : 11,
      "id" : 0,
      "event_player_type" : {
        "code" : "code",
        "name" : "name",
        "category" : "miss"
      },
      "home_team" : true,
      "shirt_number" : 9,
      "player" : {
        "name" : "Cristiano Ronaldo",
        "id" : 5,
        "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
        "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
      }
    }, {
      "position_x" : 10,
      "position_y" : 5,
      "position_number" : 11,
      "id" : 0,
      "event_player_type" : {
        "code" : "code",
        "name" : "name",
        "category" : "miss"
      },
      "home_team" : true,
      "shirt_number" : 9,
      "player" : {
        "name" : "Cristiano Ronaldo",
        "id" : 5,
        "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
        "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
      }
    } ],
    "team_id" : 6,
    "formation" : "4-3-3",
    "coach" : {
      "name" : "Cristiano Ronaldo",
      "id" : 5,
      "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
      "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
    }
  },
  "confirmed" : true
}, {
  "event_id" : 0,
  "home_team" : {
    "players" : [ {
      "position_x" : 10,
      "position_y" : 5,
      "position_number" : 11,
      "id" : 0,
      "event_player_type" : {
        "code" : "code",
        "name" : "name",
        "category" : "miss"
      },
      "home_team" : true,
      "shirt_number" : 9,
      "player" : {
        "name" : "Cristiano Ronaldo",
        "id" : 5,
        "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
        "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
      }
    }, {
      "position_x" : 10,
      "position_y" : 5,
      "position_number" : 11,
      "id" : 0,
      "event_player_type" : {
        "code" : "code",
        "name" : "name",
        "category" : "miss"
      },
      "home_team" : true,
      "shirt_number" : 9,
      "player" : {
        "name" : "Cristiano Ronaldo",
        "id" : 5,
        "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
        "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
      }
    } ],
    "team_id" : 6,
    "formation" : "4-3-3",
    "coach" : {
      "name" : "Cristiano Ronaldo",
      "id" : 5,
      "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
      "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
    }
  },
  "confirmed" : true
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get lineups by match id
 *
 * id String Unique identifier of the resource.
 * language_code String Returns translated response based on the language code (optional)
 * returns v2_Lineup
 **/
exports.v2MatchesIdLineupsGET = function(id,language_code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "match_id" : "match_id",
  "home_team" : {
    "players" : [ {
      "position_x" : 0,
      "position_y" : 6,
      "type" : { },
      "shirt_number" : 1,
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
      }
    }, {
      "position_x" : 0,
      "position_y" : 6,
      "type" : { },
      "shirt_number" : 1,
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
      }
    } ],
    "formation" : "formation",
    "team_id" : "team_id",
    "coach" : {
      "country" : {
        "code" : "code",
        "name" : "name",
        "id" : "id"
      },
      "birthdate" : "birthdate",
      "gender" : "MALE",
      "name" : "name",
      "id" : "id"
    }
  },
  "status" : "CONFIRMED"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Lineup information
 *
 * body V2_LineupInput Lineup information to save in persistance
 * id String Unique identifier of the resource.
 * returns v2_Lineup
 **/
exports.v2MatchesIdLineupsPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "match_id" : "match_id",
  "home_team" : {
    "players" : [ {
      "position_x" : 0,
      "position_y" : 6,
      "type" : { },
      "shirt_number" : 1,
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
      }
    }, {
      "position_x" : 0,
      "position_y" : 6,
      "type" : { },
      "shirt_number" : 1,
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
      }
    } ],
    "formation" : "formation",
    "team_id" : "team_id",
    "coach" : {
      "country" : {
        "code" : "code",
        "name" : "name",
        "id" : "id"
      },
      "birthdate" : "birthdate",
      "gender" : "MALE",
      "name" : "name",
      "id" : "id"
    }
  },
  "status" : "CONFIRMED"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

