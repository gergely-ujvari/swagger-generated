'use strict';

var utils = require('../utils/writer.js');
var Tournaments = require('../service/TournamentsService');

module.exports.tournamentsGET = function tournamentsGET (req, res, next, acceptLanguage, country_id, client_order, expand_client_sortorder) {
  Tournaments.tournamentsGET(acceptLanguage, country_id, client_order, expand_client_sortorder)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tournamentsIdGET = function tournamentsIdGET (req, res, next, id, acceptLanguage) {
  Tournaments.tournamentsIdGET(id, acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tournamentsIdSeasonsGET = function tournamentsIdSeasonsGET (req, res, next, id, acceptLanguage) {
  Tournaments.tournamentsIdSeasonsGET(id, acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tournamentsIdSeasonsLatestGET = function tournamentsIdSeasonsLatestGET (req, res, next, id, acceptLanguage) {
  Tournaments.tournamentsIdSeasonsLatestGET(id, acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tournamentsSeasonsIdCardlistGET = function tournamentsSeasonsIdCardlistGET (req, res, next, id, acceptLanguage) {
  Tournaments.tournamentsSeasonsIdCardlistGET(id, acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tournamentsSeasonsIdEventsGET = function tournamentsSeasonsIdEventsGET (req, res, next, id, acceptLanguage, group_by) {
  Tournaments.tournamentsSeasonsIdEventsGET(id, acceptLanguage, group_by)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tournamentsSeasonsIdGET = function tournamentsSeasonsIdGET (req, res, next, id, acceptLanguage) {
  Tournaments.tournamentsSeasonsIdGET(id, acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tournamentsSeasonsIdTeamsGET = function tournamentsSeasonsIdTeamsGET (req, res, next, id, acceptLanguage) {
  Tournaments.tournamentsSeasonsIdTeamsGET(id, acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tournamentsSeasonsIdTopscorerGET = function tournamentsSeasonsIdTopscorerGET (req, res, next, id, acceptLanguage) {
  Tournaments.tournamentsSeasonsIdTopscorerGET(id, acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tournamentsSeasonsStagesActiveGET = function tournamentsSeasonsStagesActiveGET (req, res, next) {
  Tournaments.tournamentsSeasonsStagesActiveGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tournamentsSeasonsStagesGroupsIdGET = function tournamentsSeasonsStagesGroupsIdGET (req, res, next, id, expand, acceptLanguage) {
  Tournaments.tournamentsSeasonsStagesGroupsIdGET(id, expand, acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tournamentsSeasonsStagesGroupsIdStandingGET = function tournamentsSeasonsStagesGroupsIdStandingGET (req, res, next, id, expand, acceptLanguage) {
  Tournaments.tournamentsSeasonsStagesGroupsIdStandingGET(id, expand, acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tournamentsSeasonsStagesIdEventsGET = function tournamentsSeasonsStagesIdEventsGET (req, res, next, id, round, sort_direction, acceptLanguage) {
  Tournaments.tournamentsSeasonsStagesIdEventsGET(id, round, sort_direction, acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tournamentsSeasonsStagesIdGET = function tournamentsSeasonsStagesIdGET (req, res, next, id, expand, acceptLanguage) {
  Tournaments.tournamentsSeasonsStagesIdGET(id, expand, acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tournamentsSeasonsStagesIdRoundsGET = function tournamentsSeasonsStagesIdRoundsGET (req, res, next, id, expand) {
  Tournaments.tournamentsSeasonsStagesIdRoundsGET(id, expand)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tournamentsSeasonsStagesIdStandingGET = function tournamentsSeasonsStagesIdStandingGET (req, res, next, id, expand, acceptLanguage) {
  Tournaments.tournamentsSeasonsStagesIdStandingGET(id, expand, acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tournamentsSeasonsStagesIdTeamsGET = function tournamentsSeasonsStagesIdTeamsGET (req, res, next, id, acceptLanguage) {
  Tournaments.tournamentsSeasonsStagesIdTeamsGET(id, acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
