'use strict';


/**
 * Get a list of live commentaries with specified match id and language
 *
 * id String Unique identifier of the resource.
 * language_code String Return translations depending on language code
 * returns List
 **/
exports.matchesIdCommentaryGET = function(id,language_code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "elapsed" : 0,
  "template_text" : "template_text",
  "incident_timestamp" : "2000-01-23T04:56:07.000+00:00",
  "auto_text" : "auto_text",
  "details" : [ { }, { } ],
  "type" : "type"
}, {
  "elapsed" : 0,
  "template_text" : "template_text",
  "incident_timestamp" : "2000-01-23T04:56:07.000+00:00",
  "auto_text" : "auto_text",
  "details" : [ { }, { } ],
  "type" : "type"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of matches
 *
 * limit Integer Select an upper limit for the matches that would be returned
 * offset Integer Select an offset for the matches that would be returned
 * tournament_ids List Filter matches, which have been played as part of the listed tournaments (optional)
 * season_ids List Filter matches, which have been played as part of the listed tournament seasons (optional)
 * stage_ids List Filter matches, which have been played as part of the listed tournament stages (optional)
 * group_ids List Filter matches, which have been played as part of the listed tournament groups (optional)
 * round_ids List Filter matches, which have been played as part of the listed tournament rounds (optional)
 * round_filter List Filter matches by combinations of stage_id and round_id. Format: {stage_id}:{round_id} (optional)
 * from_kickoff_time Date Filter matches, which have a start_time after the specified date, format is ISO 8601 (optional)
 * to_kickoff_time Date Filter matches, which have a start_time before the specified date, format is ISO 8601 (optional)
 * team_ids List Filter matches by teams which have taken part in them (optional)
 * status_types List Filter matches by their status types (optional)
 * status_codes List Filter matches by their status codes (optional)
 * referee_id Integer Filter matches by the referee who has taken part in them (optional)
 * venue_id String Filter matches by the venue that has hosted them (optional)
 * sort_direction String Sort matches in asc|desc order by start_time (optional)
 * returns List
 **/
exports.v2MatchesGET = function(limit,offset,tournament_ids,season_ids,stage_ids,group_ids,round_ids,round_filter,from_kickoff_time,to_kickoff_time,team_ids,status_types,status_codes,referee_id,venue_id,sort_direction) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "coverage" : "LIVE",
  "venue" : {
    "name" : "name",
    "id" : "id"
  },
  "phase_started_at" : "2000-01-23T04:56:07.000+00:00",
  "finished_at" : "2000-01-23T04:56:07.000+00:00",
  "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
  "spectators" : 6,
  "minute" : {
    "injury_time" : 5,
    "regular_time" : 1
  },
  "score" : {
    "total" : {
      "away" : 5,
      "home" : 1
    }
  },
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
  "round" : {
    "name" : "name",
    "type" : "type",
    "key" : "key"
  },
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
  "id" : "id",
  "home_team" : {
    "three_letter_code" : "three_letter_code",
    "gender" : "gender",
    "name" : "name",
    "short_name" : "short_name",
    "id" : "id",
    "type" : "PLACEHOLDER",
    "$shirt_color" : "$shirt_color"
  },
  "referees" : [ {
    "role" : "REFEREE",
    "gender" : "MALE",
    "name" : "name",
    "id" : "id"
  }, {
    "role" : "REFEREE",
    "gender" : "MALE",
    "name" : "name",
    "id" : "id"
  } ],
  "status" : {
    "code" : "code",
    "name" : "name",
    "short_name" : "short_name",
    "id" : "id",
    "type" : "FINISHED"
  },
  "group" : {
    "name" : "name",
    "order_in_stage" : 0,
    "id" : "id"
  }
}, {
  "coverage" : "LIVE",
  "venue" : {
    "name" : "name",
    "id" : "id"
  },
  "phase_started_at" : "2000-01-23T04:56:07.000+00:00",
  "finished_at" : "2000-01-23T04:56:07.000+00:00",
  "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
  "spectators" : 6,
  "minute" : {
    "injury_time" : 5,
    "regular_time" : 1
  },
  "score" : {
    "total" : {
      "away" : 5,
      "home" : 1
    }
  },
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
  "round" : {
    "name" : "name",
    "type" : "type",
    "key" : "key"
  },
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
  "id" : "id",
  "home_team" : {
    "three_letter_code" : "three_letter_code",
    "gender" : "gender",
    "name" : "name",
    "short_name" : "short_name",
    "id" : "id",
    "type" : "PLACEHOLDER",
    "$shirt_color" : "$shirt_color"
  },
  "referees" : [ {
    "role" : "REFEREE",
    "gender" : "MALE",
    "name" : "name",
    "id" : "id"
  }, {
    "role" : "REFEREE",
    "gender" : "MALE",
    "name" : "name",
    "id" : "id"
  } ],
  "status" : {
    "code" : "code",
    "name" : "name",
    "short_name" : "short_name",
    "id" : "id",
    "type" : "FINISHED"
  },
  "group" : {
    "name" : "name",
    "order_in_stage" : 0,
    "id" : "id"
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
 *
 * id String Unique identifier of the resource.
 * language_code String Returns translated response based on the language code (optional)
 * returns v2_Match
 **/
exports.v2MatchesIdGET = function(id,language_code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "coverage" : "LIVE",
  "venue" : {
    "name" : "name",
    "id" : "id"
  },
  "phase_started_at" : "2000-01-23T04:56:07.000+00:00",
  "finished_at" : "2000-01-23T04:56:07.000+00:00",
  "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
  "spectators" : 6,
  "minute" : {
    "injury_time" : 5,
    "regular_time" : 1
  },
  "score" : {
    "total" : {
      "away" : 5,
      "home" : 1
    }
  },
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
  "round" : {
    "name" : "name",
    "type" : "type",
    "key" : "key"
  },
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
  "id" : "id",
  "home_team" : {
    "three_letter_code" : "three_letter_code",
    "gender" : "gender",
    "name" : "name",
    "short_name" : "short_name",
    "id" : "id",
    "type" : "PLACEHOLDER",
    "$shirt_color" : "$shirt_color"
  },
  "referees" : [ {
    "role" : "REFEREE",
    "gender" : "MALE",
    "name" : "name",
    "id" : "id"
  }, {
    "role" : "REFEREE",
    "gender" : "MALE",
    "name" : "name",
    "id" : "id"
  } ],
  "status" : {
    "code" : "code",
    "name" : "name",
    "short_name" : "short_name",
    "id" : "id",
    "type" : "FINISHED"
  },
  "group" : {
    "name" : "name",
    "order_in_stage" : 0,
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
 *
 * body V2_MatchInput Match information to save
 * id String Unique identifier of the resource.
 * returns v2_Match
 **/
exports.v2MatchesIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "coverage" : "LIVE",
  "venue" : {
    "name" : "name",
    "id" : "id"
  },
  "phase_started_at" : "2000-01-23T04:56:07.000+00:00",
  "finished_at" : "2000-01-23T04:56:07.000+00:00",
  "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
  "spectators" : 6,
  "minute" : {
    "injury_time" : 5,
    "regular_time" : 1
  },
  "score" : {
    "total" : {
      "away" : 5,
      "home" : 1
    }
  },
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
  "round" : {
    "name" : "name",
    "type" : "type",
    "key" : "key"
  },
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
  "id" : "id",
  "home_team" : {
    "three_letter_code" : "three_letter_code",
    "gender" : "gender",
    "name" : "name",
    "short_name" : "short_name",
    "id" : "id",
    "type" : "PLACEHOLDER",
    "$shirt_color" : "$shirt_color"
  },
  "referees" : [ {
    "role" : "REFEREE",
    "gender" : "MALE",
    "name" : "name",
    "id" : "id"
  }, {
    "role" : "REFEREE",
    "gender" : "MALE",
    "name" : "name",
    "id" : "id"
  } ],
  "status" : {
    "code" : "code",
    "name" : "name",
    "short_name" : "short_name",
    "id" : "id",
    "type" : "FINISHED"
  },
  "group" : {
    "name" : "name",
    "order_in_stage" : 0,
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
 * Get a list of matches
 *
 * match_ids List Filter matches by their IDs (optional)
 * date date Filter matches by the date when they were played, format is ISO 8601 (optional)
 * utc_offset Float Filter matches by date and UTC offset, allowed value range: [-12,14] (optional)
 * tournament_group String Filter matches by a tournament group code (optional)
 * status_types List Filter matches by status types (optional)
 * selection_filter String Fetch selected matches for specific date and tournament_group (optional)
 * returns List
 **/
exports.v2MatchesLivescoreGET = function(match_ids,date,utc_offset,tournament_group,status_types,selection_filter) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "coverage" : "LIVE",
  "venue" : {
    "name" : "name",
    "id" : "id"
  },
  "phase_started_at" : "2000-01-23T04:56:07.000+00:00",
  "finished_at" : "2000-01-23T04:56:07.000+00:00",
  "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
  "spectators" : 6,
  "minute" : {
    "injury_time" : 5,
    "regular_time" : 1
  },
  "score" : {
    "total" : {
      "away" : 5,
      "home" : 1
    }
  },
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
  "round" : {
    "name" : "name",
    "type" : "type",
    "key" : "key"
  },
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
  "id" : "id",
  "home_team" : {
    "three_letter_code" : "three_letter_code",
    "gender" : "gender",
    "name" : "name",
    "short_name" : "short_name",
    "id" : "id",
    "type" : "PLACEHOLDER",
    "$shirt_color" : "$shirt_color"
  },
  "referees" : [ {
    "role" : "REFEREE",
    "gender" : "MALE",
    "name" : "name",
    "id" : "id"
  }, {
    "role" : "REFEREE",
    "gender" : "MALE",
    "name" : "name",
    "id" : "id"
  } ],
  "status" : {
    "code" : "code",
    "name" : "name",
    "short_name" : "short_name",
    "id" : "id",
    "type" : "FINISHED"
  },
  "group" : {
    "name" : "name",
    "order_in_stage" : 0,
    "id" : "id"
  }
}, {
  "coverage" : "LIVE",
  "venue" : {
    "name" : "name",
    "id" : "id"
  },
  "phase_started_at" : "2000-01-23T04:56:07.000+00:00",
  "finished_at" : "2000-01-23T04:56:07.000+00:00",
  "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
  "spectators" : 6,
  "minute" : {
    "injury_time" : 5,
    "regular_time" : 1
  },
  "score" : {
    "total" : {
      "away" : 5,
      "home" : 1
    }
  },
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
  "round" : {
    "name" : "name",
    "type" : "type",
    "key" : "key"
  },
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
  "id" : "id",
  "home_team" : {
    "three_letter_code" : "three_letter_code",
    "gender" : "gender",
    "name" : "name",
    "short_name" : "short_name",
    "id" : "id",
    "type" : "PLACEHOLDER",
    "$shirt_color" : "$shirt_color"
  },
  "referees" : [ {
    "role" : "REFEREE",
    "gender" : "MALE",
    "name" : "name",
    "id" : "id"
  }, {
    "role" : "REFEREE",
    "gender" : "MALE",
    "name" : "name",
    "id" : "id"
  } ],
  "status" : {
    "code" : "code",
    "name" : "name",
    "short_name" : "short_name",
    "id" : "id",
    "type" : "FINISHED"
  },
  "group" : {
    "name" : "name",
    "order_in_stage" : 0,
    "id" : "id"
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
 *
 * body V2_MatchInput Match information to save
 * returns v2_Match
 **/
exports.v2MatchesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "coverage" : "LIVE",
  "venue" : {
    "name" : "name",
    "id" : "id"
  },
  "phase_started_at" : "2000-01-23T04:56:07.000+00:00",
  "finished_at" : "2000-01-23T04:56:07.000+00:00",
  "kickoff_time" : "2000-01-23T04:56:07.000+00:00",
  "spectators" : 6,
  "minute" : {
    "injury_time" : 5,
    "regular_time" : 1
  },
  "score" : {
    "total" : {
      "away" : 5,
      "home" : 1
    }
  },
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
  "round" : {
    "name" : "name",
    "type" : "type",
    "key" : "key"
  },
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
  "id" : "id",
  "home_team" : {
    "three_letter_code" : "three_letter_code",
    "gender" : "gender",
    "name" : "name",
    "short_name" : "short_name",
    "id" : "id",
    "type" : "PLACEHOLDER",
    "$shirt_color" : "$shirt_color"
  },
  "referees" : [ {
    "role" : "REFEREE",
    "gender" : "MALE",
    "name" : "name",
    "id" : "id"
  }, {
    "role" : "REFEREE",
    "gender" : "MALE",
    "name" : "name",
    "id" : "id"
  } ],
  "status" : {
    "code" : "code",
    "name" : "name",
    "short_name" : "short_name",
    "id" : "id",
    "type" : "FINISHED"
  },
  "group" : {
    "name" : "name",
    "order_in_stage" : 0,
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

