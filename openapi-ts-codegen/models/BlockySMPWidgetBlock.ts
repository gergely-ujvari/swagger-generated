/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * This type of block contains SMP widgets. In the data, you will find the "content" attribute, which can be used as-is if you want to build the widget as well as the "widget type", while "config" contains all JSON required to build the widget from scratch.
 */
export type BlockySMPWidgetBlock = {
    data?: {
        /**
         * HTML div ready to be parsed by Widget loader
         */
        content?: string;
        widget_type?: BlockySMPWidgetBlock.widget_type;
        config?: {
            options?: any;
            widgetId?: string;
        };
        preview?: {
            mainBookMaker?: any;
            match?: any;
            matches?: any;
            player?: any;
            properties?: any;
            selectedBookmakers?: any;
            team?: any;
            tournament?: any;
        };
    };
    /**
     * Block type
     */
    type?: string;
};

export namespace BlockySMPWidgetBlock {

    export enum widget_type {
        WIDGET_ODDS = 'widgetOdds',
        COMPARE_ODDS = 'compareOdds',
        PLAYER_PROFILE = 'playerProfile',
        TEAM_PROFILE = 'teamProfile',
        STANDINGS = 'standings',
        WIDGET_POLLS = 'widgetPolls',
        WIDGET_MATCH = 'widgetMatch',
        WIDGET_FIXTURES = 'widgetFixtures',
        WIDGET_TOP_SCORERS = 'widgetTopScorers',
        TEAM_PLAYERS = 'teamPlayers',
        WIDGET_PLAYER_H2H = 'widgetPlayerH2H',
    }


}
