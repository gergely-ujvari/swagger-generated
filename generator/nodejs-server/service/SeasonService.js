'use strict';


/**
 * Get the details of a season by season_id, or by tournament_id and active status
 *
 * season_id String The ID of the season of interest (optional)
 * tournament_id String The ID of the tournament whose active season is of interest (optional)
 * status String Required only when the tournament_id parameter is provided (optional)
 * language_code String Returns translated response based on the language code (optional)
 * returns v2_SeasonDetails
 **/
exports.v2SeasonsDetailsGET = function(season_id,tournament_id,status,language_code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "stages" : [ {
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
      "end_date" : "end_date",
      "name" : "name",
      "id" : "id",
      "type" : "type",
      "key" : "key",
      "start_date" : "start_date",
      "status" : "status"
    }, {
      "end_date" : "end_date",
      "name" : "name",
      "id" : "id",
      "type" : "type",
      "key" : "key",
      "start_date" : "start_date",
      "status" : "status"
    } ]
  }, {
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
      "end_date" : "end_date",
      "name" : "name",
      "id" : "id",
      "type" : "type",
      "key" : "key",
      "start_date" : "start_date",
      "status" : "status"
    }, {
      "end_date" : "end_date",
      "name" : "name",
      "id" : "id",
      "type" : "type",
      "key" : "key",
      "start_date" : "start_date",
      "status" : "status"
    } ]
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
 * Get seasons by tournament_id, team_id and status
 *
 * tournament_id String Required only if no other parameters are provided (optional)
 * team_id String Required only if no other paramenters are provided (optional)
 * status String Required only if no other parameters are provided (optional)
 * language_code String Returns translated response based on the language code (optional)
 * returns v2_SeasonList
 **/
exports.v2SeasonsGET = function(tournament_id,team_id,status,language_code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "seasons" : [ {
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
 * Update an existing season
 *
 * body V2_TournamentSeasonUpdateInput Season name
 * id String Unique identifier of the resource.
 * returns v2_Season
 **/
exports.v2SeasonsIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List all stages for specific season
 *
 * id String Unique identifier of the resource.
 * language_code String Returns translated response based on the language code (optional)
 * returns v2_SeasonStageCollection
 **/
exports.v2SeasonsIdStagesGET = function(id,language_code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "stages" : [ {
    "end_date" : "2000-01-23",
    "coverage" : "coverage",
    "name" : "name",
    "id" : "id",
    "type" : "GROUP",
    "order_in_season" : 0,
    "start_date" : "2000-01-23",
    "status" : "ACTIVE"
  }, {
    "end_date" : "2000-01-23",
    "coverage" : "coverage",
    "name" : "name",
    "id" : "id",
    "type" : "GROUP",
    "order_in_season" : 0,
    "start_date" : "2000-01-23",
    "status" : "ACTIVE"
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
 * Create or update multiple stages
 *
 * body List List of stages to be updated or created
 * id String Unique identifier of the resource.
 * returns v2_SeasonStageCollection
 **/
exports.v2SeasonsIdStagesPOST = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "stages" : [ {
    "end_date" : "2000-01-23",
    "coverage" : "coverage",
    "name" : "name",
    "id" : "id",
    "type" : "GROUP",
    "order_in_season" : 0,
    "start_date" : "2000-01-23",
    "status" : "ACTIVE"
  }, {
    "end_date" : "2000-01-23",
    "coverage" : "coverage",
    "name" : "name",
    "id" : "id",
    "type" : "GROUP",
    "order_in_season" : 0,
    "start_date" : "2000-01-23",
    "status" : "ACTIVE"
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
 * Create a new season
 *
 * body V2_TournamentSeasonInsertInput Season information
 * returns v2_Season
 **/
exports.v2SeasonsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Permanently delete stage
 *
 * id String Unique identifier of the resource.
 * no response value expected for this operation
 **/
exports.v2StagesIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set the current season as active and change all other seasons in the tournament to inactive
 *
 * body V2_TournamentSeasonStatusInput Season unique identifier
 * id String Unique identifier of the resource.
 * returns v2_Season
 **/
exports.v2TournamentsIdSeasonsCurrentPATCH = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

