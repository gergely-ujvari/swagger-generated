'use strict';


/**
 * Get match events by match id
 *
 * id String Unique identifier of the resource.
 * language_code String Returns translated response based on the language code (optional)
 * returns v2_MatchEventProfile
 **/
exports.v2MatchesIdEventsGET = function(id,language_code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "events" : [ {
    "score" : {
      "away" : 5,
      "home" : 1
    },
    "team_position" : "HOME",
    "primary_player" : {
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
    "match_id" : "match_id",
    "id" : "id",
    "team_id" : "team_id",
    "type_code" : "YELLOW_RED_CARD",
    "minute" : 0
  }, {
    "score" : {
      "away" : 5,
      "home" : 1
    },
    "team_position" : "HOME",
    "primary_player" : {
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
    "match_id" : "match_id",
    "id" : "id",
    "team_id" : "team_id",
    "type_code" : "YELLOW_RED_CARD",
    "minute" : 0
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Replaces all match events with the given input
 *
 * body V2_MatchEventInputWrapper Match event information to save
 * id String Unique identifier of the resource.
 * returns v2_MatchEventProfile
 **/
exports.v2MatchesIdEventsPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "events" : [ {
    "score" : {
      "away" : 5,
      "home" : 1
    },
    "team_position" : "HOME",
    "primary_player" : {
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
    "match_id" : "match_id",
    "id" : "id",
    "team_id" : "team_id",
    "type_code" : "YELLOW_RED_CARD",
    "minute" : 0
  }, {
    "score" : {
      "away" : 5,
      "home" : 1
    },
    "team_position" : "HOME",
    "primary_player" : {
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
    "match_id" : "match_id",
    "id" : "id",
    "team_id" : "team_id",
    "type_code" : "YELLOW_RED_CARD",
    "minute" : 0
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

