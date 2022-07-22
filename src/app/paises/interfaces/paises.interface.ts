export interface CountryResponse {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  string [];
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms?:    Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        CoatOfArms;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
    cioc?:        string;
    borders?:     string[];
    gini?:        { [key: string]: number };
    fifa?:        string;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
    cca3?: string ;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    DKK?: Aed;
    USD?: Aed;
    GEL?: Aed;
    GYD?: Aed;
    EUR?: Aed;
    BWP?: Aed;
    LKR?: Aed;
    OMR?: Aed;
    MVR?: Aed;
    WST?: Aed;
    SLL?: Aed;
    BND?: Aed;
    SGD?: Aed;
    JMD?: Aed;
    MWK?: Aed;
    MYR?: Aed;
    XAF?: Aed;
    TWD?: Aed;
    XCD?: Aed;
    DJF?: Aed;
    AUD?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    MUR?: Aed;
    BGN?: Aed;
    XOF?: Aed;
    EGP?: Aed;
    BSD?: Aed;
    LYD?: Aed;
    ARS?: Aed;
    VES?: Aed;
    SSP?: Aed;
    KMF?: Aed;
    BAM?: BAM;
    NIO?: Aed;
    ZMW?: Aed;
    GNF?: Aed;
    CDF?: Aed;
    SAR?: Aed;
    FOK?: Aed;
    COP?: Aed;
    LAK?: Aed;
    KYD?: Aed;
    SZL?: Aed;
    ZAR?: Aed;
    SDG?: BAM;
    TVD?: Aed;
    SYP?: Aed;
    LRD?: Aed;
    CHF?: Aed;
    ISK?: Aed;
    ZWL?: Aed;
    BRL?: Aed;
    RWF?: Aed;
    UZS?: Aed;
    XPF?: Aed;
    BDT?: Aed;
    GIP?: Aed;
    AWG?: Aed;
    PAB?: Aed;
    PHP?: Aed;
    RUB?: Aed;
    MZN?: Aed;
    GBP?: Aed;
    SHP?: Aed;
    IRR?: Aed;
    CAD?: Aed;
    AFN?: Aed;
    FKP?: Aed;
    RON?: Aed;
    AZN?: Aed;
    GGP?: Aed;
    KHR?: Aed;
    SRD?: Aed;
    DZD?: Aed;
    AMD?: Aed;
    MAD?: Aed;
    BBD?: Aed;
    AOA?: Aed;
    SBD?: Aed;
    FJD?: Aed;
    MXN?: Aed;
    MOP?: Aed;
    BHD?: Aed;
    YER?: Aed;
    MRU?: Aed;
    CKD?: Aed;
    NZD?: Aed;
    PEN?: Aed;
    RSD?: Aed;
    TZS?: Aed;
    PKR?: Aed;
    BYN?: Aed;
    MMK?: Aed;
    SCR?: Aed;
    BMD?: Aed;
    UAH?: Aed;
    GMD?: Aed;
    PYG?: Aed;
    STN?: Aed;
    KRW?: Aed;
    TND?: Aed;
    KWD?: Aed;
    PGK?: Aed;
    HKD?: Aed;
    KID?: Aed;
    MGA?: Aed;
    BOB?: Aed;
    IMP?: Aed;
    KGS?: Aed;
    KZT?: Aed;
    MKD?: Aed;
    TOP?: Aed;
    CLP?: Aed;
    BIF?: Aed;
    DOP?: Aed;
    LSL?: Aed;
    KPW?: Aed;
    BTN?: Aed;
    INR?: Aed;
    SOS?: Aed;
    TJS?: Aed;
    LBP?: Aed;
    ANG?: Aed;
    UGX?: Aed;
    GHS?: Aed;
    ALL?: Aed;
    JEP?: Aed;
    NAD?: Aed;
    VND?: Aed;
    ILS?: Aed;
    JOD?: Aed;
    TRY?: Aed;
    MDL?: Aed;
    JPY?: Aed;
    HRK?: Aed;
    IDR?: Aed;
    TMT?: Aed;
    VUV?: Aed;
    BZD?: Aed;
    ETB?: Aed;
    HNL?: Aed;
    PLN?: Aed;
    QAR?: Aed;
    HTG?: Aed;
    UYU?: Aed;
    KES?: Aed;
    THB?: Aed;
    CRC?: Aed;
    NPR?: Aed;
    CVE?: Aed;
    TTD?: Aed;
    ERN?: Aed;
    NGN?: Aed;
    NOK?: Aed;
    SEK?: Aed;
    IQD?: Aed;
    CNY?: Aed;
    AED?: Aed;
    MNT?: Aed;
    GTQ?: Aed;
    CZK?: Aed;
    HUF?: Aed;
}

export interface Aed {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Sunday = "sunday",
    Turday = "turday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}
