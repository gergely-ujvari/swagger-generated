'use strict';


/**
 *
 * stage_id String Get knockout schemes for given stage id
 * language_code String Returns translated response based on the language code (optional)
 * returns List
 **/
exports.v2Knockout_schemesStage_idGET = function(stage_id,language_code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "start_round" : {
    "name" : "name"
  },
  "small_final" : true,
  "stage" : {
    "end_date" : "2000-01-23",
    "coverage" : "coverage",
    "name" : "name",
    "id" : "id",
    "type" : "GROUP",
    "order_in_season" : 0,
    "start_date" : "2000-01-23",
    "status" : "ACTIVE"
  },
  "rounds" : [ {
    "name" : "name",
    "groups" : [ {
      "teams" : [ {
        "three_letter_code" : "three_letter_code",
        "gender" : "gender",
        "name" : "name",
        "id" : "id",
        "type" : "type"
      }, {
        "three_letter_code" : "three_letter_code",
        "gender" : "gender",
        "name" : "name",
        "id" : "id",
        "type" : "type"
      } ],
      "child_object_id" : "child_object_id",
      "id" : "id",
      "matches" : [ {
        "score" : {
          "total" : {
            "away" : 5,
            "home" : 1
          }
        },
        "home_team_id" : "home_team_id",
        "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
        "id" : "id",
        "away_team_id" : "away_team_id"
      }, {
        "score" : {
          "total" : {
            "away" : 5,
            "home" : 1
          }
        },
        "home_team_id" : "home_team_id",
        "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
        "id" : "id",
        "away_team_id" : "away_team_id"
      } ],
      "order" : 6
    }, {
      "teams" : [ {
        "three_letter_code" : "three_letter_code",
        "gender" : "gender",
        "name" : "name",
        "id" : "id",
        "type" : "type"
      }, {
        "three_letter_code" : "three_letter_code",
        "gender" : "gender",
        "name" : "name",
        "id" : "id",
        "type" : "type"
      } ],
      "child_object_id" : "child_object_id",
      "id" : "id",
      "matches" : [ {
        "score" : {
          "total" : {
            "away" : 5,
            "home" : 1
          }
        },
        "home_team_id" : "home_team_id",
        "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
        "id" : "id",
        "away_team_id" : "away_team_id"
      }, {
        "score" : {
          "total" : {
            "away" : 5,
            "home" : 1
          }
        },
        "home_team_id" : "home_team_id",
        "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
        "id" : "id",
        "away_team_id" : "away_team_id"
      } ],
      "order" : 6
    } ]
  }, {
    "name" : "name",
    "groups" : [ {
      "teams" : [ {
        "three_letter_code" : "three_letter_code",
        "gender" : "gender",
        "name" : "name",
        "id" : "id",
        "type" : "type"
      }, {
        "three_letter_code" : "three_letter_code",
        "gender" : "gender",
        "name" : "name",
        "id" : "id",
        "type" : "type"
      } ],
      "child_object_id" : "child_object_id",
      "id" : "id",
      "matches" : [ {
        "score" : {
          "total" : {
            "away" : 5,
            "home" : 1
          }
        },
        "home_team_id" : "home_team_id",
        "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
        "id" : "id",
        "away_team_id" : "away_team_id"
      }, {
        "score" : {
          "total" : {
            "away" : 5,
            "home" : 1
          }
        },
        "home_team_id" : "home_team_id",
        "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
        "id" : "id",
        "away_team_id" : "away_team_id"
      } ],
      "order" : 6
    }, {
      "teams" : [ {
        "three_letter_code" : "three_letter_code",
        "gender" : "gender",
        "name" : "name",
        "id" : "id",
        "type" : "type"
      }, {
        "three_letter_code" : "three_letter_code",
        "gender" : "gender",
        "name" : "name",
        "id" : "id",
        "type" : "type"
      } ],
      "child_object_id" : "child_object_id",
      "id" : "id",
      "matches" : [ {
        "score" : {
          "total" : {
            "away" : 5,
            "home" : 1
          }
        },
        "home_team_id" : "home_team_id",
        "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
        "id" : "id",
        "away_team_id" : "away_team_id"
      }, {
        "score" : {
          "total" : {
            "away" : 5,
            "home" : 1
          }
        },
        "home_team_id" : "home_team_id",
        "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
        "id" : "id",
        "away_team_id" : "away_team_id"
      } ],
      "order" : 6
    } ]
  } ]
}, {
  "start_round" : {
    "name" : "name"
  },
  "small_final" : true,
  "stage" : {
    "end_date" : "2000-01-23",
    "coverage" : "coverage",
    "name" : "name",
    "id" : "id",
    "type" : "GROUP",
    "order_in_season" : 0,
    "start_date" : "2000-01-23",
    "status" : "ACTIVE"
  },
  "rounds" : [ {
    "name" : "name",
    "groups" : [ {
      "teams" : [ {
        "three_letter_code" : "three_letter_code",
        "gender" : "gender",
        "name" : "name",
        "id" : "id",
        "type" : "type"
      }, {
        "three_letter_code" : "three_letter_code",
        "gender" : "gender",
        "name" : "name",
        "id" : "id",
        "type" : "type"
      } ],
      "child_object_id" : "child_object_id",
      "id" : "id",
      "matches" : [ {
        "score" : {
          "total" : {
            "away" : 5,
            "home" : 1
          }
        },
        "home_team_id" : "home_team_id",
        "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
        "id" : "id",
        "away_team_id" : "away_team_id"
      }, {
        "score" : {
          "total" : {
            "away" : 5,
            "home" : 1
          }
        },
        "home_team_id" : "home_team_id",
        "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
        "id" : "id",
        "away_team_id" : "away_team_id"
      } ],
      "order" : 6
    }, {
      "teams" : [ {
        "three_letter_code" : "three_letter_code",
        "gender" : "gender",
        "name" : "name",
        "id" : "id",
        "type" : "type"
      }, {
        "three_letter_code" : "three_letter_code",
        "gender" : "gender",
        "name" : "name",
        "id" : "id",
        "type" : "type"
      } ],
      "child_object_id" : "child_object_id",
      "id" : "id",
      "matches" : [ {
        "score" : {
          "total" : {
            "away" : 5,
            "home" : 1
          }
        },
        "home_team_id" : "home_team_id",
        "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
        "id" : "id",
        "away_team_id" : "away_team_id"
      }, {
        "score" : {
          "total" : {
            "away" : 5,
            "home" : 1
          }
        },
        "home_team_id" : "home_team_id",
        "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
        "id" : "id",
        "away_team_id" : "away_team_id"
      } ],
      "order" : 6
    } ]
  }, {
    "name" : "name",
    "groups" : [ {
      "teams" : [ {
        "three_letter_code" : "three_letter_code",
        "gender" : "gender",
        "name" : "name",
        "id" : "id",
        "type" : "type"
      }, {
        "three_letter_code" : "three_letter_code",
        "gender" : "gender",
        "name" : "name",
        "id" : "id",
        "type" : "type"
      } ],
      "child_object_id" : "child_object_id",
      "id" : "id",
      "matches" : [ {
        "score" : {
          "total" : {
            "away" : 5,
            "home" : 1
          }
        },
        "home_team_id" : "home_team_id",
        "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
        "id" : "id",
        "away_team_id" : "away_team_id"
      }, {
        "score" : {
          "total" : {
            "away" : 5,
            "home" : 1
          }
        },
        "home_team_id" : "home_team_id",
        "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
        "id" : "id",
        "away_team_id" : "away_team_id"
      } ],
      "order" : 6
    }, {
      "teams" : [ {
        "three_letter_code" : "three_letter_code",
        "gender" : "gender",
        "name" : "name",
        "id" : "id",
        "type" : "type"
      }, {
        "three_letter_code" : "three_letter_code",
        "gender" : "gender",
        "name" : "name",
        "id" : "id",
        "type" : "type"
      } ],
      "child_object_id" : "child_object_id",
      "id" : "id",
      "matches" : [ {
        "score" : {
          "total" : {
            "away" : 5,
            "home" : 1
          }
        },
        "home_team_id" : "home_team_id",
        "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
        "id" : "id",
        "away_team_id" : "away_team_id"
      }, {
        "score" : {
          "total" : {
            "away" : 5,
            "home" : 1
          }
        },
        "home_team_id" : "home_team_id",
        "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
        "id" : "id",
        "away_team_id" : "away_team_id"
      } ],
      "order" : 6
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

