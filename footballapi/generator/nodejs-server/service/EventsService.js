'use strict';


/**
 * Get a list of events by home and away team id
 *
 * home_id Integer Filter events with home team id
 * away_id Integer Filter events with away team id
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * returns Event
 **/
exports.eventsBy_teamsGET = function(home_id,away_id,acceptLanguage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of Events
 *
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * from_time Date Filter events, which have a start_time after the specified date, format is RFC 3339 (optional)
 * to_time Date Filter events, which have a start_time before the specified date, format is RFC 3339 (optional)
 * group_by String Group events by a specified property. Event models are returned as an 'items' array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes. (optional)
 * client_order String Order matching events for a specific client (optional)
 * returns List
 **/
exports.eventsGET = function(acceptLanguage,from_time,to_time,group_by,client_order) {
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
 *
 * id String Unique identifier of the resource.
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * expand String Specifies additional information to include with the standing response (optional)
 * returns Event
 **/
exports.eventsIdGET = function(id,acceptLanguage,expand) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of EventIncident for a specified Event (goal, subs, red cards, penalties, etc).
 *
 * id String Unique identifier of the resource.
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * group_by String Group results by a property. If 'team' is used the json object has 'home_team' and 'away_team', each containing an array of EventIncident objects (optional)
 * direction String Whether to sort the results by ascending or descending order (optional)
 * returns List
 **/
exports.eventsIdIncidentsGET = function(id,acceptLanguage,group_by,direction) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "goal_away" : 1,
  "event_id" : 1,
  "deleted" : true,
  "goal_home" : 2,
  "sortorder" : 6,
  "id" : 1,
  "team_id" : 0,
  "type" : "penalty_shootout_scored",
  "home_team" : true,
  "minute" : 68,
  "player" : {
    "name" : "Cristiano Ronaldo",
    "id" : 5,
    "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
    "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
  }
}, {
  "goal_away" : 1,
  "event_id" : 1,
  "deleted" : true,
  "goal_home" : 2,
  "sortorder" : 6,
  "id" : 1,
  "team_id" : 0,
  "type" : "penalty_shootout_scored",
  "home_team" : true,
  "minute" : 68,
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
 * Get lineup information for an event. Includes players, formation and coach
 *
 * id Integer Event.id for which lineups are requested
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * returns Lineup
 **/
exports.eventsIdLineupsGET = function(id,acceptLanguage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of players which are involved in an Event. The list can be used to build lineups for the teams
 *
 * id String Unique identifier of the resource.
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * group_by String Group results by a property. If 'team' is used the json object has 'home_team' and 'away_team', each containing an array of EventPlayer objects (optional)
 * returns List
 **/
exports.eventsIdPlayersGET = function(id,acceptLanguage,group_by) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get available pre-game odds for an Event
 *
 * id String Unique identifier of the resource.
 * xOddClient String Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a 'coupon' key with the odds fo building URLs.
 * returns List
 **/
exports.eventsIdPregameoddsGET = function(id,xOddClient) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "eventId" : 0,
  "oddProvider" : {
    "country" : {
      "code" : "code",
      "name" : "England",
      "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
      "id" : 0
    },
    "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
    "name" : "name",
    "id" : 0,
    "url" : "url"
  }
}, {
  "eventId" : 0,
  "oddProvider" : {
    "country" : {
      "code" : "code",
      "name" : "England",
      "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
      "id" : 0
    },
    "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
    "name" : "name",
    "id" : 0,
    "url" : "url"
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
 * Get a list of events which are currently live
 *
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * group_by String Group events by a specified property. Event models are returned as an 'items' array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes. (optional)
 * returns List
 **/
exports.eventsLiveGET = function(acceptLanguage,group_by) {
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
 * Get a list of events which have been updated since the specified timestamp
 *
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * last_update Date Filter events, have been updated after the specified date-time. By default will return updated Events during the last hour (optional)
 * returns List
 **/
exports.eventsSinceGET = function(acceptLanguage,last_update) {
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
 * Get a list of matches for team/between teams
 *
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * from_start_time Date Return matches with start_time >= from_start_time. RFC 3339 format (optional)
 * to_start_time Date Return matches with start_time <= from_start_time. RFC 3339 format (optional)
 * team_ids String List for team IDs separated by commas. In case of one ID, it will return all matches for a selected team, in case of multiple - it will return matches between selected teams. (optional)
 * match_ids String List for match IDs separated by commas. (optional)
 * tournament_ids String List for tournament IDs separated by commas. (optional)
 * stage_ids String List for stage IDs separated by commas. (optional)
 * rounds String List for rounds separated by commas. (optional)
 * season_ids String List for season IDs separated by commas. (optional)
 * status_types String List of status types. (optional)
 * offset Integer Results offset (optional)
 * limit Integer Results limit (optional)
 * tournament_order String Tournament filtering and ordering. (optional)
 * referee_id String Filter matches by referee (optional)
 * venue_id String Filter matches by venue (optional)
 * status_code String Filter matches by event_status.code (optional)
 * sort_direction String Result ordering - asc/desc (optional)
 * returns List
 **/
exports.matchesGET = function(acceptLanguage,from_start_time,to_start_time,team_ids,match_ids,tournament_ids,stage_ids,rounds,season_ids,status_types,offset,limit,tournament_order,referee_id,venue_id,status_code,sort_direction) {
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
 * Get a list of events which are fixtures in a given TournamentSeasonStage resource
 *
 * id Integer Unique identifier of the TournamentSeasonStage resource
 * round String Filter the event list by a specific round (optional)
 * sort_direction String Sort results by date in ascending or descending order (optional)
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * returns List
 **/
exports.tournamentsSeasonsStagesIdEventsGET = function(id,round,sort_direction,acceptLanguage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2016-08-13T00:00:00.000+00:00",
  "items" : [ {
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
  } ]
}, {
  "date" : "2016-08-13T00:00:00.000+00:00",
  "items" : [ {
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
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

