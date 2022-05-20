'use strict';

var utils = require('../utils/writer.js');
var Teams = require('../service/TeamsService');

module.exports.countriesIdTeamsGET = function countriesIdTeamsGET (req, res, next, id, acceptLanguage, national) {
  Teams.countriesIdTeamsGET(id, acceptLanguage, national)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.teamsGET = function teamsGET (req, res, next, name, acceptLanguage, max_results, country_id) {
  Teams.teamsGET(name, acceptLanguage, max_results, country_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.teamsIdEventsGET = function teamsIdEventsGET (req, res, next, id, acceptLanguage, from_time, to_time, direction, tournament_season_stage_id) {
  Teams.teamsIdEventsGET(id, acceptLanguage, from_time, to_time, direction, tournament_season_stage_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.teamsIdFormGET = function teamsIdFormGET (req, res, next, id, acceptLanguage, expand) {
  Teams.teamsIdFormGET(id, acceptLanguage, expand)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.teamsIdGET = function teamsIdGET (req, res, next, id, acceptLanguage, expand) {
  Teams.teamsIdGET(id, acceptLanguage, expand)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.teamsIdPlayersGET = function teamsIdPlayersGET (req, res, next, id, acceptLanguage, group_by) {
  Teams.teamsIdPlayersGET(id, acceptLanguage, group_by)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.teamsIdPlayersStatisticsGET = function teamsIdPlayersStatisticsGET (req, res, next, id, acceptLanguage, group_by) {
  Teams.teamsIdPlayersStatisticsGET(id, acceptLanguage, group_by)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.teamsIdPlayersStatisticsSeasonsGET = function teamsIdPlayersStatisticsSeasonsGET (req, res, next, id, acceptLanguage) {
  Teams.teamsIdPlayersStatisticsSeasonsGET(id, acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.teamsIdPlayersStatisticsSeasonsSeasonIdGET = function teamsIdPlayersStatisticsSeasonsSeasonIdGET (req, res, next, seasonId, id, acceptLanguage, group_by) {
  Teams.teamsIdPlayersStatisticsSeasonsSeasonIdGET(seasonId, id, acceptLanguage, group_by)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.teamsIdStatisticsLeagueGET = function teamsIdStatisticsLeagueGET (req, res, next, id, acceptLanguage, standing) {
  Teams.teamsIdStatisticsLeagueGET(id, acceptLanguage, standing)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tournamentsSeasonsIdTeamsGET = function tournamentsSeasonsIdTeamsGET (req, res, next, id, acceptLanguage) {
  Teams.tournamentsSeasonsIdTeamsGET(id, acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tournamentsSeasonsStagesIdTeamsGET = function tournamentsSeasonsStagesIdTeamsGET (req, res, next, id, acceptLanguage) {
  Teams.tournamentsSeasonsStagesIdTeamsGET(id, acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2TeamsColorsPOST = function v2TeamsColorsPOST (req, res, next, body) {
  Teams.v2TeamsColorsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2TeamsGET = function v2TeamsGET (req, res, next, offset, limit, language_code) {
  Teams.v2TeamsGET(offset, limit, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2TeamsIdGET = function v2TeamsIdGET (req, res, next, id, language_code) {
  Teams.v2TeamsIdGET(id, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2TeamsIdPUT = function v2TeamsIdPUT (req, res, next, body, id) {
  Teams.v2TeamsIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2TeamsPOST = function v2TeamsPOST (req, res, next, body) {
  Teams.v2TeamsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
