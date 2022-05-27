'use strict';


/**
 * Get teams squad
 *
 * id String Unique identifier of the resource.
 * memberStatus String  (optional)
 * language_code String Returns translated response based on the language code (optional)
 * returns v2_TeamSquad
 **/
exports.v2TeamsIdSquadGET = function(id,memberStatus,language_code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "players" : [ {
    "end_date" : "end_date",
    "contract_type" : "PERMANENT",
    "shirt_number" : 0,
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
    "status" : "ACTIVE",
    "start_date" : "start_date"
  }, {
    "end_date" : "end_date",
    "contract_type" : "PERMANENT",
    "shirt_number" : 0,
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
    "status" : "ACTIVE",
    "start_date" : "start_date"
  } ],
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
 * Update TeamSquad members
 *
 * body V2_TeamSquadInput TeamSquad members to update. Null value for a property means no update
 * id String Unique identifier of the resource.
 * returns v2_TeamSquad
 **/
exports.v2TeamsIdSquadPATCH = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "players" : [ {
    "end_date" : "end_date",
    "contract_type" : "PERMANENT",
    "shirt_number" : 0,
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
    "status" : "ACTIVE",
    "start_date" : "start_date"
  }, {
    "end_date" : "end_date",
    "contract_type" : "PERMANENT",
    "shirt_number" : 0,
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
    "status" : "ACTIVE",
    "start_date" : "start_date"
  } ],
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
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

