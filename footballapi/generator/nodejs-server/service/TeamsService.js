'use strict';


/**
 * Get Teams for a specific Country.id
 *
 * id String Unique identifier of the resource.
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * national String Filter teams for different types of national and non national (optional)
 * returns List
 **/
exports.countriesIdTeamsGET = function(id,acceptLanguage,national) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "country" : {
    "code" : "code",
    "name" : "England",
    "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
    "id" : 0
  },
  "venue" : {
    "lng" : 3.6160767,
    "city" : "city",
    "name" : "name",
    "id" : 2,
    "lat" : 9.301444,
    "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg",
    "capacity" : 7
  },
  "url_squad_image" : "http://football-api.devks.msk.bg/assets/squad_image.jpeg",
  "gender" : "MALE",
  "social" : { },
  "founded" : 1902,
  "current_league" : "",
  "url_away_kit" : "http://football-api.devks.msk.bg/assets/away_kit.jpeg",
  "threeLetterCode" : "RMA",
  "form" : [ {
    "event" : {
      "penalty_away" : 4,
      "start_time" : "2000-01-23T04:56:07.000+00:00",
      "goal_away" : 1,
      "penalty_home" : 5,
      "agg_away" : 2,
      "goal_home" : 2,
      "id" : 0,
      "home_team" : {
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
      "event_status" : {
        "code" : "finished",
        "name" : "Finished",
        "short_name" : "FIN",
        "type" : "finished"
      },
      "agg_home" : 4
    },
    "outcome" : "W"
  }, {
    "event" : {
      "penalty_away" : 4,
      "start_time" : "2000-01-23T04:56:07.000+00:00",
      "goal_away" : 1,
      "penalty_home" : 5,
      "agg_away" : 2,
      "goal_home" : 2,
      "id" : 0,
      "home_team" : {
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
      "event_status" : {
        "code" : "finished",
        "name" : "Finished",
        "short_name" : "FIN",
        "type" : "finished"
      },
      "agg_home" : 4
    },
    "outcome" : "W"
  } ],
  "url_home_kit" : "http://football-api.devks.msk.bg/assets/home_kit.jpeg",
  "undecided" : true,
  "name" : "Real Madrid",
  "national" : true,
  "id" : 6,
  "shortName" : "Loko Plovdiv",
  "coach" : {
    "birthdate" : "1985-02-05T00:00:00.000+00:00",
    "gender" : "MALE",
    "name" : "Cristiano Ronaldo",
    "last_name" : "Ronaldo",
    "active" : true,
    "id" : 0,
    "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
    "first_name" : "Cristiano",
    "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
  },
  "president" : "Florentino Perez",
  "next_event" : {
    "penalty_away" : 4,
    "venue" : {
      "lng" : 3.6160767,
      "city" : "city",
      "name" : "name",
      "id" : 2,
      "lat" : 9.301444,
      "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg",
      "capacity" : 7
    },
    "goal_away" : 1,
    "teamstats_available" : true,
    "stage_group" : {
      "name" : "name",
      "order_in_stage" : 5,
      "id" : 1
    },
    "home_score" : {
      "half_time" : 4,
      "ordinary_time" : 7,
      "penalty_shootout" : 1,
      "extra_time" : 1
    },
    "spectators" : 95554,
    "referee" : {
      "name" : "Cristiano Ronaldo",
      "id" : 5,
      "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
      "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
    },
    "minute" : 85,
    "start_time" : "2000-01-23T04:56:07.000+00:00",
    "penalty_home" : 5,
    "agg_away" : 2,
    "goal_home" : 2,
    "incidents" : 2,
    "live_updates" : true,
    "started_at" : "2000-01-23T04:56:07.000+00:00",
    "tournament_season_stage" : {
      "country" : {
        "code" : "code",
        "name" : "England",
        "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
        "id" : 0
      },
      "name" : "Champions League Final Stages",
      "id" : 1,
      "tournament_season_id" : 0,
      "cup" : true,
      "tournament_id" : 6,
      "confederation" : "confederation"
    },
    "id" : 1,
    "home_team" : {
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
    "lineup_available" : true,
    "event_status" : {
      "code" : "finished",
      "name" : "Finished",
      "short_name" : "FIN",
      "type" : "finished"
    },
    "agg_home" : 4
  }
}, {
  "country" : {
    "code" : "code",
    "name" : "England",
    "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
    "id" : 0
  },
  "venue" : {
    "lng" : 3.6160767,
    "city" : "city",
    "name" : "name",
    "id" : 2,
    "lat" : 9.301444,
    "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg",
    "capacity" : 7
  },
  "url_squad_image" : "http://football-api.devks.msk.bg/assets/squad_image.jpeg",
  "gender" : "MALE",
  "social" : { },
  "founded" : 1902,
  "current_league" : "",
  "url_away_kit" : "http://football-api.devks.msk.bg/assets/away_kit.jpeg",
  "threeLetterCode" : "RMA",
  "form" : [ {
    "event" : {
      "penalty_away" : 4,
      "start_time" : "2000-01-23T04:56:07.000+00:00",
      "goal_away" : 1,
      "penalty_home" : 5,
      "agg_away" : 2,
      "goal_home" : 2,
      "id" : 0,
      "home_team" : {
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
      "event_status" : {
        "code" : "finished",
        "name" : "Finished",
        "short_name" : "FIN",
        "type" : "finished"
      },
      "agg_home" : 4
    },
    "outcome" : "W"
  }, {
    "event" : {
      "penalty_away" : 4,
      "start_time" : "2000-01-23T04:56:07.000+00:00",
      "goal_away" : 1,
      "penalty_home" : 5,
      "agg_away" : 2,
      "goal_home" : 2,
      "id" : 0,
      "home_team" : {
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
      "event_status" : {
        "code" : "finished",
        "name" : "Finished",
        "short_name" : "FIN",
        "type" : "finished"
      },
      "agg_home" : 4
    },
    "outcome" : "W"
  } ],
  "url_home_kit" : "http://football-api.devks.msk.bg/assets/home_kit.jpeg",
  "undecided" : true,
  "name" : "Real Madrid",
  "national" : true,
  "id" : 6,
  "shortName" : "Loko Plovdiv",
  "coach" : {
    "birthdate" : "1985-02-05T00:00:00.000+00:00",
    "gender" : "MALE",
    "name" : "Cristiano Ronaldo",
    "last_name" : "Ronaldo",
    "active" : true,
    "id" : 0,
    "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
    "first_name" : "Cristiano",
    "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
  },
  "president" : "Florentino Perez",
  "next_event" : {
    "penalty_away" : 4,
    "venue" : {
      "lng" : 3.6160767,
      "city" : "city",
      "name" : "name",
      "id" : 2,
      "lat" : 9.301444,
      "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg",
      "capacity" : 7
    },
    "goal_away" : 1,
    "teamstats_available" : true,
    "stage_group" : {
      "name" : "name",
      "order_in_stage" : 5,
      "id" : 1
    },
    "home_score" : {
      "half_time" : 4,
      "ordinary_time" : 7,
      "penalty_shootout" : 1,
      "extra_time" : 1
    },
    "spectators" : 95554,
    "referee" : {
      "name" : "Cristiano Ronaldo",
      "id" : 5,
      "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
      "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
    },
    "minute" : 85,
    "start_time" : "2000-01-23T04:56:07.000+00:00",
    "penalty_home" : 5,
    "agg_away" : 2,
    "goal_home" : 2,
    "incidents" : 2,
    "live_updates" : true,
    "started_at" : "2000-01-23T04:56:07.000+00:00",
    "tournament_season_stage" : {
      "country" : {
        "code" : "code",
        "name" : "England",
        "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
        "id" : 0
      },
      "name" : "Champions League Final Stages",
      "id" : 1,
      "tournament_season_id" : 0,
      "cup" : true,
      "tournament_id" : 6,
      "confederation" : "confederation"
    },
    "id" : 1,
    "home_team" : {
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
    "lineup_available" : true,
    "event_status" : {
      "code" : "finished",
      "name" : "Finished",
      "short_name" : "FIN",
      "type" : "finished"
    },
    "agg_home" : 4
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
 * Search all teams by parameters
 *
 * name String Filter by team. Length must be >= 4. The filter matches on a per word basis. If you query for 'United' it will match both 'West Ham United' and 'Newcastle United'
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * max_results Integer Limit the number of results returned (optional)
 * country_id Integer Filter teams just from the specified country (optional)
 * returns List
 **/
exports.teamsGET = function(name,acceptLanguage,max_results,country_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "country" : {
    "code" : "code",
    "name" : "England",
    "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
    "id" : 0
  },
  "venue" : {
    "lng" : 3.6160767,
    "city" : "city",
    "name" : "name",
    "id" : 2,
    "lat" : 9.301444,
    "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg",
    "capacity" : 7
  },
  "url_squad_image" : "http://football-api.devks.msk.bg/assets/squad_image.jpeg",
  "gender" : "MALE",
  "social" : { },
  "founded" : 1902,
  "current_league" : "",
  "url_away_kit" : "http://football-api.devks.msk.bg/assets/away_kit.jpeg",
  "threeLetterCode" : "RMA",
  "form" : [ {
    "event" : {
      "penalty_away" : 4,
      "start_time" : "2000-01-23T04:56:07.000+00:00",
      "goal_away" : 1,
      "penalty_home" : 5,
      "agg_away" : 2,
      "goal_home" : 2,
      "id" : 0,
      "home_team" : {
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
      "event_status" : {
        "code" : "finished",
        "name" : "Finished",
        "short_name" : "FIN",
        "type" : "finished"
      },
      "agg_home" : 4
    },
    "outcome" : "W"
  }, {
    "event" : {
      "penalty_away" : 4,
      "start_time" : "2000-01-23T04:56:07.000+00:00",
      "goal_away" : 1,
      "penalty_home" : 5,
      "agg_away" : 2,
      "goal_home" : 2,
      "id" : 0,
      "home_team" : {
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
      "event_status" : {
        "code" : "finished",
        "name" : "Finished",
        "short_name" : "FIN",
        "type" : "finished"
      },
      "agg_home" : 4
    },
    "outcome" : "W"
  } ],
  "url_home_kit" : "http://football-api.devks.msk.bg/assets/home_kit.jpeg",
  "undecided" : true,
  "name" : "Real Madrid",
  "national" : true,
  "id" : 6,
  "shortName" : "Loko Plovdiv",
  "coach" : {
    "birthdate" : "1985-02-05T00:00:00.000+00:00",
    "gender" : "MALE",
    "name" : "Cristiano Ronaldo",
    "last_name" : "Ronaldo",
    "active" : true,
    "id" : 0,
    "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
    "first_name" : "Cristiano",
    "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
  },
  "president" : "Florentino Perez",
  "next_event" : {
    "penalty_away" : 4,
    "venue" : {
      "lng" : 3.6160767,
      "city" : "city",
      "name" : "name",
      "id" : 2,
      "lat" : 9.301444,
      "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg",
      "capacity" : 7
    },
    "goal_away" : 1,
    "teamstats_available" : true,
    "stage_group" : {
      "name" : "name",
      "order_in_stage" : 5,
      "id" : 1
    },
    "home_score" : {
      "half_time" : 4,
      "ordinary_time" : 7,
      "penalty_shootout" : 1,
      "extra_time" : 1
    },
    "spectators" : 95554,
    "referee" : {
      "name" : "Cristiano Ronaldo",
      "id" : 5,
      "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
      "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
    },
    "minute" : 85,
    "start_time" : "2000-01-23T04:56:07.000+00:00",
    "penalty_home" : 5,
    "agg_away" : 2,
    "goal_home" : 2,
    "incidents" : 2,
    "live_updates" : true,
    "started_at" : "2000-01-23T04:56:07.000+00:00",
    "tournament_season_stage" : {
      "country" : {
        "code" : "code",
        "name" : "England",
        "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
        "id" : 0
      },
      "name" : "Champions League Final Stages",
      "id" : 1,
      "tournament_season_id" : 0,
      "cup" : true,
      "tournament_id" : 6,
      "confederation" : "confederation"
    },
    "id" : 1,
    "home_team" : {
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
    "lineup_available" : true,
    "event_status" : {
      "code" : "finished",
      "name" : "Finished",
      "short_name" : "FIN",
      "type" : "finished"
    },
    "agg_home" : 4
  }
}, {
  "country" : {
    "code" : "code",
    "name" : "England",
    "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
    "id" : 0
  },
  "venue" : {
    "lng" : 3.6160767,
    "city" : "city",
    "name" : "name",
    "id" : 2,
    "lat" : 9.301444,
    "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg",
    "capacity" : 7
  },
  "url_squad_image" : "http://football-api.devks.msk.bg/assets/squad_image.jpeg",
  "gender" : "MALE",
  "social" : { },
  "founded" : 1902,
  "current_league" : "",
  "url_away_kit" : "http://football-api.devks.msk.bg/assets/away_kit.jpeg",
  "threeLetterCode" : "RMA",
  "form" : [ {
    "event" : {
      "penalty_away" : 4,
      "start_time" : "2000-01-23T04:56:07.000+00:00",
      "goal_away" : 1,
      "penalty_home" : 5,
      "agg_away" : 2,
      "goal_home" : 2,
      "id" : 0,
      "home_team" : {
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
      "event_status" : {
        "code" : "finished",
        "name" : "Finished",
        "short_name" : "FIN",
        "type" : "finished"
      },
      "agg_home" : 4
    },
    "outcome" : "W"
  }, {
    "event" : {
      "penalty_away" : 4,
      "start_time" : "2000-01-23T04:56:07.000+00:00",
      "goal_away" : 1,
      "penalty_home" : 5,
      "agg_away" : 2,
      "goal_home" : 2,
      "id" : 0,
      "home_team" : {
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
      "event_status" : {
        "code" : "finished",
        "name" : "Finished",
        "short_name" : "FIN",
        "type" : "finished"
      },
      "agg_home" : 4
    },
    "outcome" : "W"
  } ],
  "url_home_kit" : "http://football-api.devks.msk.bg/assets/home_kit.jpeg",
  "undecided" : true,
  "name" : "Real Madrid",
  "national" : true,
  "id" : 6,
  "shortName" : "Loko Plovdiv",
  "coach" : {
    "birthdate" : "1985-02-05T00:00:00.000+00:00",
    "gender" : "MALE",
    "name" : "Cristiano Ronaldo",
    "last_name" : "Ronaldo",
    "active" : true,
    "id" : 0,
    "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
    "first_name" : "Cristiano",
    "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
  },
  "president" : "Florentino Perez",
  "next_event" : {
    "penalty_away" : 4,
    "venue" : {
      "lng" : 3.6160767,
      "city" : "city",
      "name" : "name",
      "id" : 2,
      "lat" : 9.301444,
      "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg",
      "capacity" : 7
    },
    "goal_away" : 1,
    "teamstats_available" : true,
    "stage_group" : {
      "name" : "name",
      "order_in_stage" : 5,
      "id" : 1
    },
    "home_score" : {
      "half_time" : 4,
      "ordinary_time" : 7,
      "penalty_shootout" : 1,
      "extra_time" : 1
    },
    "spectators" : 95554,
    "referee" : {
      "name" : "Cristiano Ronaldo",
      "id" : 5,
      "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
      "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
    },
    "minute" : 85,
    "start_time" : "2000-01-23T04:56:07.000+00:00",
    "penalty_home" : 5,
    "agg_away" : 2,
    "goal_home" : 2,
    "incidents" : 2,
    "live_updates" : true,
    "started_at" : "2000-01-23T04:56:07.000+00:00",
    "tournament_season_stage" : {
      "country" : {
        "code" : "code",
        "name" : "England",
        "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
        "id" : 0
      },
      "name" : "Champions League Final Stages",
      "id" : 1,
      "tournament_season_id" : 0,
      "cup" : true,
      "tournament_id" : 6,
      "confederation" : "confederation"
    },
    "id" : 1,
    "home_team" : {
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
    "lineup_available" : true,
    "event_status" : {
      "code" : "finished",
      "name" : "Finished",
      "short_name" : "FIN",
      "type" : "finished"
    },
    "agg_home" : 4
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
 * Get a list of events in which a team with a specified id has participated
 *
 * id String Unique identifier of the resource.
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * from_time Date Filter events, which have a start_time after the specified date, format is RFC 3339 (optional)
 * to_time Date Filter events, which have a start_time before the specified date, format is RFC 3339 (optional)
 * direction String Whether to sort the results by ascending or descending order (optional)
 * tournament_season_stage_id Integer Filter events for a specific tournament_season_stage.id (optional)
 * returns List
 **/
exports.teamsIdEventsGET = function(id,acceptLanguage,from_time,to_time,direction,tournament_season_stage_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "penalty_away" : 4,
  "venue" : {
    "lng" : 3.6160767,
    "city" : "city",
    "name" : "name",
    "id" : 2,
    "lat" : 9.301444,
    "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg",
    "capacity" : 7
  },
  "goal_away" : 1,
  "teamstats_available" : true,
  "stage_group" : {
    "name" : "name",
    "order_in_stage" : 5,
    "id" : 1
  },
  "home_score" : {
    "half_time" : 4,
    "ordinary_time" : 7,
    "penalty_shootout" : 1,
    "extra_time" : 1
  },
  "spectators" : 95554,
  "referee" : {
    "name" : "Cristiano Ronaldo",
    "id" : 5,
    "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
    "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
  },
  "minute" : 85,
  "start_time" : "2000-01-23T04:56:07.000+00:00",
  "penalty_home" : 5,
  "agg_away" : 2,
  "goal_home" : 2,
  "incidents" : 2,
  "live_updates" : true,
  "started_at" : "2000-01-23T04:56:07.000+00:00",
  "tournament_season_stage" : {
    "country" : {
      "code" : "code",
      "name" : "England",
      "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
      "id" : 0
    },
    "name" : "Champions League Final Stages",
    "id" : 1,
    "tournament_season_id" : 0,
    "cup" : true,
    "tournament_id" : 6,
    "confederation" : "confederation"
  },
  "id" : 1,
  "home_team" : {
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
  "lineup_available" : true,
  "event_status" : {
    "code" : "finished",
    "name" : "Finished",
    "short_name" : "FIN",
    "type" : "finished"
  },
  "agg_home" : 4
}, {
  "penalty_away" : 4,
  "venue" : {
    "lng" : 3.6160767,
    "city" : "city",
    "name" : "name",
    "id" : 2,
    "lat" : 9.301444,
    "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg",
    "capacity" : 7
  },
  "goal_away" : 1,
  "teamstats_available" : true,
  "stage_group" : {
    "name" : "name",
    "order_in_stage" : 5,
    "id" : 1
  },
  "home_score" : {
    "half_time" : 4,
    "ordinary_time" : 7,
    "penalty_shootout" : 1,
    "extra_time" : 1
  },
  "spectators" : 95554,
  "referee" : {
    "name" : "Cristiano Ronaldo",
    "id" : 5,
    "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
    "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
  },
  "minute" : 85,
  "start_time" : "2000-01-23T04:56:07.000+00:00",
  "penalty_home" : 5,
  "agg_away" : 2,
  "goal_home" : 2,
  "incidents" : 2,
  "live_updates" : true,
  "started_at" : "2000-01-23T04:56:07.000+00:00",
  "tournament_season_stage" : {
    "country" : {
      "code" : "code",
      "name" : "England",
      "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
      "id" : 0
    },
    "name" : "Champions League Final Stages",
    "id" : 1,
    "tournament_season_id" : 0,
    "cup" : true,
    "tournament_id" : 6,
    "confederation" : "confederation"
  },
  "id" : 1,
  "home_team" : {
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
  "lineup_available" : true,
  "event_status" : {
    "code" : "finished",
    "name" : "Finished",
    "short_name" : "FIN",
    "type" : "finished"
  },
  "agg_home" : 4
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Team form information accross all tournaments
 *
 * id String Unique identifier of the resource.
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * expand String Whether to include information about every event in the TeamForm response (optional)
 * returns List
 **/
exports.teamsIdFormGET = function(id,acceptLanguage,expand) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "event" : {
    "penalty_away" : 4,
    "start_time" : "2000-01-23T04:56:07.000+00:00",
    "goal_away" : 1,
    "penalty_home" : 5,
    "agg_away" : 2,
    "goal_home" : 2,
    "id" : 0,
    "home_team" : {
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
    "event_status" : {
      "code" : "finished",
      "name" : "Finished",
      "short_name" : "FIN",
      "type" : "finished"
    },
    "agg_home" : 4
  },
  "outcome" : "W"
}, {
  "event" : {
    "penalty_away" : 4,
    "start_time" : "2000-01-23T04:56:07.000+00:00",
    "goal_away" : 1,
    "penalty_home" : 5,
    "agg_away" : 2,
    "goal_home" : 2,
    "id" : 0,
    "home_team" : {
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
    "event_status" : {
      "code" : "finished",
      "name" : "Finished",
      "short_name" : "FIN",
      "type" : "finished"
    },
    "agg_home" : 4
  },
  "outcome" : "W"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get information about a specific Team
 *
 * id String Unique identifier of the resource.
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * expand String Specifies additional information to include with the Team response (optional)
 * returns Team
 **/
exports.teamsIdGET = function(id,acceptLanguage,expand) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : {
    "code" : "code",
    "name" : "England",
    "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
    "id" : 0
  },
  "venue" : {
    "lng" : 3.6160767,
    "city" : "city",
    "name" : "name",
    "id" : 2,
    "lat" : 9.301444,
    "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg",
    "capacity" : 7
  },
  "url_squad_image" : "http://football-api.devks.msk.bg/assets/squad_image.jpeg",
  "gender" : "MALE",
  "social" : { },
  "founded" : 1902,
  "current_league" : "",
  "url_away_kit" : "http://football-api.devks.msk.bg/assets/away_kit.jpeg",
  "threeLetterCode" : "RMA",
  "form" : [ {
    "event" : {
      "penalty_away" : 4,
      "start_time" : "2000-01-23T04:56:07.000+00:00",
      "goal_away" : 1,
      "penalty_home" : 5,
      "agg_away" : 2,
      "goal_home" : 2,
      "id" : 0,
      "home_team" : {
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
      "event_status" : {
        "code" : "finished",
        "name" : "Finished",
        "short_name" : "FIN",
        "type" : "finished"
      },
      "agg_home" : 4
    },
    "outcome" : "W"
  }, {
    "event" : {
      "penalty_away" : 4,
      "start_time" : "2000-01-23T04:56:07.000+00:00",
      "goal_away" : 1,
      "penalty_home" : 5,
      "agg_away" : 2,
      "goal_home" : 2,
      "id" : 0,
      "home_team" : {
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
      "event_status" : {
        "code" : "finished",
        "name" : "Finished",
        "short_name" : "FIN",
        "type" : "finished"
      },
      "agg_home" : 4
    },
    "outcome" : "W"
  } ],
  "url_home_kit" : "http://football-api.devks.msk.bg/assets/home_kit.jpeg",
  "undecided" : true,
  "name" : "Real Madrid",
  "national" : true,
  "id" : 6,
  "shortName" : "Loko Plovdiv",
  "coach" : {
    "birthdate" : "1985-02-05T00:00:00.000+00:00",
    "gender" : "MALE",
    "name" : "Cristiano Ronaldo",
    "last_name" : "Ronaldo",
    "active" : true,
    "id" : 0,
    "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
    "first_name" : "Cristiano",
    "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
  },
  "president" : "Florentino Perez",
  "next_event" : {
    "penalty_away" : 4,
    "venue" : {
      "lng" : 3.6160767,
      "city" : "city",
      "name" : "name",
      "id" : 2,
      "lat" : 9.301444,
      "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg",
      "capacity" : 7
    },
    "goal_away" : 1,
    "teamstats_available" : true,
    "stage_group" : {
      "name" : "name",
      "order_in_stage" : 5,
      "id" : 1
    },
    "home_score" : {
      "half_time" : 4,
      "ordinary_time" : 7,
      "penalty_shootout" : 1,
      "extra_time" : 1
    },
    "spectators" : 95554,
    "referee" : {
      "name" : "Cristiano Ronaldo",
      "id" : 5,
      "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
      "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
    },
    "minute" : 85,
    "start_time" : "2000-01-23T04:56:07.000+00:00",
    "penalty_home" : 5,
    "agg_away" : 2,
    "goal_home" : 2,
    "incidents" : 2,
    "live_updates" : true,
    "started_at" : "2000-01-23T04:56:07.000+00:00",
    "tournament_season_stage" : {
      "country" : {
        "code" : "code",
        "name" : "England",
        "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
        "id" : 0
      },
      "name" : "Champions League Final Stages",
      "id" : 1,
      "tournament_season_id" : 0,
      "cup" : true,
      "tournament_id" : 6,
      "confederation" : "confederation"
    },
    "id" : 1,
    "home_team" : {
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
    "lineup_available" : true,
    "event_status" : {
      "code" : "finished",
      "name" : "Finished",
      "short_name" : "FIN",
      "type" : "finished"
    },
    "agg_home" : 4
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
 * Get the current squad for a Team
 *
 * id String Unique identifier of the resource.
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * group_by String Group players by a specific property (optional)
 * returns List
 **/
exports.teamsIdPlayersGET = function(id,acceptLanguage,group_by) {
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
 * Get player statistics for the current season in the Team's League
 *
 * id String Unique identifier of the resource.
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * group_by String Group the response by a specific property (optional)
 * returns TeamPlayerSeasonStatistics
 **/
exports.teamsIdPlayersStatisticsGET = function(id,acceptLanguage,group_by) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of TournamentSeasons for which Player Statistics are available
 *
 * id String Unique identifier of the resource.
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * returns List
 **/
exports.teamsIdPlayersStatisticsSeasonsGET = function(id,acceptLanguage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get player statistics for the current season in the Team's League
 *
 * seasonId Integer Unique identifier of the TournamentSeason resource
 * id String Unique identifier of the resource.
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * group_by String Group the response by a specific property (optional)
 * returns TeamPlayerSeasonStatistics
 **/
exports.teamsIdPlayersStatisticsSeasonsSeasonIdGET = function(seasonId,id,acceptLanguage,group_by) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the statistics for the latest League the team participates in
 *
 * id String Unique identifier of the resource.
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * standing String Select whether to include a full league standing or just the team's position (optional)
 * returns TeamSeasonStatistics
 **/
exports.teamsIdStatisticsLeagueGET = function(id,acceptLanguage,standing) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "team_id" : 0,
  "player_statistics" : [ {
    "shirt_number" : 5,
    "player" : {
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
    }
  }, {
    "shirt_number" : 5,
    "player" : {
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
    }
  } ],
  "latest_league_stage" : {
    "end_date" : "2015-06-21T00:00:00.000+00:00",
    "country" : {
      "code" : "code",
      "name" : "England",
      "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
      "id" : 0
    },
    "tournament_season_id" : 1,
    "tournament_id" : 5,
    "qualification" : true,
    "standing" : [ "", "" ],
    "name" : "Champions League Final Stages",
    "stage_groups" : 6,
    "id" : 1,
    "live" : true,
    "rounds" : [ {
      "start_time" : "2000-01-23T04:56:07.000+00:00",
      "round" : "round",
      "end_time" : "2000-01-23T04:56:07.000+00:00",
      "events" : [ {
        "penalty_away" : 4,
        "start_time" : "2000-01-23T04:56:07.000+00:00",
        "goal_away" : 1,
        "penalty_home" : 5,
        "agg_away" : 2,
        "goal_home" : 2,
        "id" : 0,
        "home_team" : {
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
        "event_status" : {
          "code" : "finished",
          "name" : "Finished",
          "short_name" : "FIN",
          "type" : "finished"
        },
        "agg_home" : 4
      }, {
        "penalty_away" : 4,
        "start_time" : "2000-01-23T04:56:07.000+00:00",
        "goal_away" : 1,
        "penalty_home" : 5,
        "agg_away" : 2,
        "goal_home" : 2,
        "id" : 0,
        "home_team" : {
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
        "event_status" : {
          "code" : "finished",
          "name" : "Finished",
          "short_name" : "FIN",
          "type" : "finished"
        },
        "agg_home" : 4
      } ]
    }, {
      "start_time" : "2000-01-23T04:56:07.000+00:00",
      "round" : "round",
      "end_time" : "2000-01-23T04:56:07.000+00:00",
      "events" : [ {
        "penalty_away" : 4,
        "start_time" : "2000-01-23T04:56:07.000+00:00",
        "goal_away" : 1,
        "penalty_home" : 5,
        "agg_away" : 2,
        "goal_home" : 2,
        "id" : 0,
        "home_team" : {
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
        "event_status" : {
          "code" : "finished",
          "name" : "Finished",
          "short_name" : "FIN",
          "type" : "finished"
        },
        "agg_home" : 4
      }, {
        "penalty_away" : 4,
        "start_time" : "2000-01-23T04:56:07.000+00:00",
        "goal_away" : 1,
        "penalty_home" : 5,
        "agg_away" : 2,
        "goal_home" : 2,
        "id" : 0,
        "home_team" : {
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
        "event_status" : {
          "code" : "finished",
          "name" : "Finished",
          "short_name" : "FIN",
          "type" : "finished"
        },
        "agg_home" : 4
      } ]
    } ],
    "start_date" : "2015-06-20T00:00:00.000+00:00",
    "cup" : true,
    "confederation" : "confederation"
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
 * Get a list of Teams, which are participating in a given TournamentSeason
 *
 * id Integer Unique identifier of the TournamentSeason resource
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * returns List
 **/
exports.tournamentsSeasonsIdTeamsGET = function(id,acceptLanguage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
  "gender" : "MALE",
  "undecided" : true,
  "name" : "Real Madrid",
  "national" : true,
  "threeLetterCode" : "RMA",
  "id" : 6,
  "shortName" : "Loko Plovdiv",
  "type" : "placeholder"
}, {
  "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
  "gender" : "MALE",
  "undecided" : true,
  "name" : "Real Madrid",
  "national" : true,
  "threeLetterCode" : "RMA",
  "id" : 6,
  "shortName" : "Loko Plovdiv",
  "type" : "placeholder"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of Teams, which are participating in a given TournamentSeasonStage
 *
 * id Integer Unique identifier of the TournamentSeasonStage resource
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * returns List
 **/
exports.tournamentsSeasonsStagesIdTeamsGET = function(id,acceptLanguage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
  "gender" : "MALE",
  "undecided" : true,
  "name" : "Real Madrid",
  "national" : true,
  "threeLetterCode" : "RMA",
  "id" : 6,
  "shortName" : "Loko Plovdiv",
  "type" : "placeholder"
}, {
  "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
  "gender" : "MALE",
  "undecided" : true,
  "name" : "Real Madrid",
  "national" : true,
  "threeLetterCode" : "RMA",
  "id" : 6,
  "shortName" : "Loko Plovdiv",
  "type" : "placeholder"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Manually insert team colors by team or event.
 *
 * body V2_TeamColors Team shirt colors data (optional)
 * returns v2_TeamColors
 **/
exports.v2TeamsColorsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "entity_type" : "entity_type",
  "entity_id" : "entity_id",
  "colors" : [ {
    "type" : "type",
    "color_code" : "color_code"
  }, {
    "type" : "type",
    "color_code" : "color_code"
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
 * Get teams list
 *
 * offset Integer The number of items to skip before starting to collect the result set
 * limit Integer Limit the number of results returned
 * language_code String Returns translated response based on the language code (optional)
 * returns TeamPageDto
 **/
exports.v2TeamsGET = function(offset,limit,language_code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
 * Get team by id
 *
 * id String Unique identifier of the resource.
 * language_code String Returns translated response based on the language code (optional)
 * returns v2_TeamProfile
 **/
exports.v2TeamsIdGET = function(id,language_code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : {
    "code" : "code",
    "name" : "name",
    "id" : "id"
  },
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
  "founded" : 0,
  "active_seasons" : [ {
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
  }, {
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
  } ],
  "type" : "type",
  "three_letter_code" : "three_letter_code",
  "name" : "name",
  "short_name" : "short_name",
  "id" : "id",
  "shirt_colors" : [ {
    "type" : "type",
    "color_code" : "color_code"
  }, {
    "type" : "type",
    "color_code" : "color_code"
  } ],
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
  },
  "president" : {
    "name" : "name",
    "id" : "id"
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
 * Update Team information
 *
 * body TeamEditDto Team information to save in persistance
 * id String Unique identifier of the resource.
 * returns v2_TeamProfile
 **/
exports.v2TeamsIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : {
    "code" : "code",
    "name" : "name",
    "id" : "id"
  },
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
  "founded" : 0,
  "active_seasons" : [ {
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
  }, {
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
  } ],
  "type" : "type",
  "three_letter_code" : "three_letter_code",
  "name" : "name",
  "short_name" : "short_name",
  "id" : "id",
  "shirt_colors" : [ {
    "type" : "type",
    "color_code" : "color_code"
  }, {
    "type" : "type",
    "color_code" : "color_code"
  } ],
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
  },
  "president" : {
    "name" : "name",
    "id" : "id"
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
 * Manually insert team.
 *
 * body TeamEditDto TeamEditDto object (optional)
 * returns v2_TeamProfile
 **/
exports.v2TeamsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : {
    "code" : "code",
    "name" : "name",
    "id" : "id"
  },
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
  "founded" : 0,
  "active_seasons" : [ {
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
  }, {
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
  } ],
  "type" : "type",
  "three_letter_code" : "three_letter_code",
  "name" : "name",
  "short_name" : "short_name",
  "id" : "id",
  "shirt_colors" : [ {
    "type" : "type",
    "color_code" : "color_code"
  }, {
    "type" : "type",
    "color_code" : "color_code"
  } ],
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
  },
  "president" : {
    "name" : "name",
    "id" : "id"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

