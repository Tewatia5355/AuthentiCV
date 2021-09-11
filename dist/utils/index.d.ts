import moment from 'moment-timezone';
import { Location } from '../index';
export declare const getIsCountry: (text: string) => boolean;
export declare const getIsCity: (text: string) => boolean;
export declare const formatDate: (date: moment.MomentInput | string) => string;
export declare const getDurationInDays: (formattedStartDate: string, formattedEndDate: Date | string) => number | null;
export declare const getLocationFromText: (text: string) => Location | null;
export declare const getCleanText: (text: string | null) => string | null;
export declare const statusLog: (section: string, message: string, scraperSessionId?: string | number | undefined) => void;
export declare const autoScroll: (page: any) => Promise<void>;
export declare const getHostname: (url: string) => string;
