export enum SegmentID {
  INNER_1,
  TRP_1,
  OUTER_1,
  DBL_1,
  INNER_2,
  TRP_2,
  OUTER_2,
  DBL_2,
  INNER_3,
  TRP_3,
  OUTER_3,
  DBL_3,
  INNER_4,
  TRP_4,
  OUTER_4,
  DBL_4,
  INNER_5,
  TRP_5,
  OUTER_5,
  DBL_5,
  INNER_6,
  TRP_6,
  OUTER_6,
  DBL_6,
  INNER_7,
  TRP_7,
  OUTER_7,
  DBL_7,
  INNER_8,
  TRP_8,
  OUTER_8,
  DBL_8,
  INNER_9,
  TRP_9,
  OUTER_9,
  DBL_9,
  INNER_10,
  TRP_10,
  OUTER_10,
  DBL_10,
  INNER_11,
  TRP_11,
  OUTER_11,
  DBL_11,
  INNER_12,
  TRP_12,
  OUTER_12,
  DBL_12,
  INNER_13,
  TRP_13,
  OUTER_13,
  DBL_13,
  INNER_14,
  TRP_14,
  OUTER_14,
  DBL_14,
  INNER_15,
  TRP_15,
  OUTER_15,
  DBL_15,
  INNER_16,
  TRP_16,
  OUTER_16,
  DBL_16,
  INNER_17,
  TRP_17,
  OUTER_17,
  DBL_17,
  INNER_18,
  TRP_18,
  OUTER_18,
  DBL_18,
  INNER_19,
  TRP_19,
  OUTER_19,
  DBL_19,
  INNER_20,
  TRP_20,
  OUTER_20,
  DBL_20,
  BULL,
  DBL_BULL,
  MISS,
  BUST,
  RESET_BUTTON,
}

export enum SegmentSection {
  One = 1,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Eleven,
  Twelve,
  Thirteen,
  Fourteen,
  Fifteen,
  Sixteen,
  Seventeen,
  Eighteen,
  Nineteen,
  Twenty,
  BULL = 25,
  Other,
}

export enum SegmentType {
  Single = 1,
  Double = 2,
  Triple = 3,
  Other = 4,
}

export interface Segment {
  ID: SegmentID;
  Type: SegmentType;
  Section: SegmentSection;
  Value: number;
  LongName: string;
  ShortName: string;
}

export const SegmentTypeToString = (type: SegmentType, shorthand: boolean) => {
  switch (type) {
    case SegmentType.Single:
      return "";
    case SegmentType.Double:
      return shorthand ? "D" : "Double";
    case SegmentType.Triple:
      return shorthand ? "T" : "Triple";
  }

  return "";
};

export const CreateSegment = (segmentId: SegmentID): Segment => {
  // There are 80 regular segments, and then 3 special (bullseye, double bullseye, and reset button)
  if (segmentId < 80) {
    let Type = SegmentType.Other;
    switch (segmentId % 4) {
      case 1:
        Type = SegmentType.Triple;
        break;
      case 3:
        Type = SegmentType.Double;
        break;
      default:
        Type = SegmentType.Single;
    }
    const Section = Math.ceil((segmentId + 1) / 4);
    const Value = Section * Type;
    const LongName = SegmentTypeToString(Type, false) + " " + Section;
    const ShortName = SegmentTypeToString(Type, true) + Section;

    return { ID: segmentId, Type, Section, Value, LongName, ShortName };
  } else {
    // The segment is either bullseye or the reset button
    switch (segmentId) {
      case SegmentID.BULL:
      case SegmentID.DBL_BULL:
        let Type =
          segmentId === SegmentID.BULL
            ? SegmentType.Single
            : SegmentType.Double;
        let Section = SegmentSection.BULL;
        let Value = segmentId === SegmentID.BULL ? 25 : 50;
        let LongName = SegmentTypeToString(Type, false) + " Bullseye";
        let ShortName = SegmentTypeToString(Type, true) + "BULL";
        return { ID: segmentId, Type, Section, Value, LongName, ShortName };
      case SegmentID.RESET_BUTTON:
        return {
          ID: segmentId,
          Type: SegmentType.Other,
          Section: SegmentSection.Other,
          Value: 0,
          LongName: "Reset Button",
          ShortName: "RST",
        };
      case SegmentID.BUST:
        return {
          ID: segmentId,
          Type: SegmentType.Other,
          Section: SegmentSection.Other,
          Value: 0,
          LongName: "Bust",
          ShortName: "Bust",
        };
      case SegmentID.MISS:
      default:
        return {
          ID: segmentId,
          Type: SegmentType.Other,
          Section: SegmentSection.Other,
          Value: 0,
          LongName: "Miss",
          ShortName: "Miss",
        };
    }
  }
};
