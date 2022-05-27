'use strict';


/**
 * Get a list of available Tournament resources
 *
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * country_id Integer Get Tournaments from a specific Country.id (optional)
 * client_order String Get Tournaments ordered for a specific client (optional)
 * expand_client_sortorder String Include extra information with Tournament response (optional)
 * returns List
 **/
exports.tournamentsGET = function(acceptLanguage,country_id,client_order,expand_client_sortorder) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
}, {
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
 * returns TournamentWithSeasons
 **/
exports.tournamentsIdGET = function(id,acceptLanguage) {
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
 * Get a list of seasons for a given Tournament id
 *
 * id String Unique identifier of the resource.
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * returns List
 **/
exports.tournamentsIdSeasonsGET = function(id,acceptLanguage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "2015/2016",
  "active" : true,
  "id" : 0
}, {
  "name" : "2015/2016",
  "active" : true,
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get information for the latest season for a given Tournament. This is an alias to whatever resource is first in /tournaments/{id}/seasons
 *
 * id Integer Unique identifier of the Tournament resource
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * returns TournamentSeasonWithStages
 **/
exports.tournamentsIdSeasonsLatestGET = function(id,acceptLanguage) {
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
 * Get a standing by red,yellow cards for a specific TournamentSeason resource.
 *
 * id Integer Unique identifier of the TournamentSeason resource
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * returns List
 **/
exports.tournamentsSeasonsIdCardlistGET = function(id,acceptLanguage) {
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
 * Get a list of Events, for a given TournamentSeason
 *
 * id Integer Unique identifier of the TournamentSeason resource
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * group_by String Whether to group events by date (optional)
 * returns List
 **/
exports.tournamentsSeasonsIdEventsGET = function(id,acceptLanguage,group_by) {
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
 * Get information for a given TournamentSeason resource id.
 *
 * id Integer Unique identifier of the TournamentSeason resource
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * returns TournamentSeasonWithStages
 **/
exports.tournamentsSeasonsIdGET = function(id,acceptLanguage) {
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
 * Get a list of topscorers for a specific TournamentSeason resource.
 *
 * id Integer Unique identifier of the TournamentSeason resource
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * returns List
 **/
exports.tournamentsSeasonsIdTopscorerGET = function(id,acceptLanguage) {
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
 * Get all currently active tournament season stages
 *
 * returns List
 **/
exports.tournamentsSeasonsStagesActiveGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
}, {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get information for a StageGroup Resource
 *
 * id Integer Unique identifier of the StageGroup resource
 * expand String Specify additional information to include with the response (optional)
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * returns StageGroupWithStandingTournamentSeasonStage
 **/
exports.tournamentsSeasonsStagesGroupsIdGET = function(id,expand,acceptLanguage) {
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
 * Get Standing for a StageGroup Resource
 *
 * id Integer Unique identifier of the StageGroup resource
 * expand String Specify additional information to include with the response (optional)
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * returns List
 **/
exports.tournamentsSeasonsStagesGroupsIdStandingGET = function(id,expand,acceptLanguage) {
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


/**
 * Get information for a TournamentSeasonStage Resource
 *
 * id Integer Unique identifier of the TournamentSeasonStage resource
 * expand String Specify additional information to include with the response (optional)
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * returns TournamentSeasonStageWithStandingGroups
 **/
exports.tournamentsSeasonsStagesIdGET = function(id,expand,acceptLanguage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of rounds for a specific TournamentSeasonStage
 *
 * id Integer Unique identifier of the TournamentSeasonStage resource
 * expand String Specify what additional information to include with the response (optional)
 * returns List
 **/
exports.tournamentsSeasonsStagesIdRoundsGET = function(id,expand) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Standing for a TournamentSeasonStage Resource
 *
 * id Integer Unique identifier of the TournamentSeasonStage resource
 * expand String Specify additional information to include with the response (optional)
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * returns List
 **/
exports.tournamentsSeasonsStagesIdStandingGET = function(id,expand,acceptLanguage) {
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

