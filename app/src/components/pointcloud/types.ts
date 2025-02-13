import { PointsProps, ThreeDimensionalPoint } from "@arizeai/point-cloud";

export interface PontMetaData {
  id: string;
  eventId: string;
  predictionLabel?: string | null;
  actualLabel?: string | null;
  predictionScore?: number | null;
  actualScore?: number | null;
}
export type ThreeDimensionalPointItem = {
  position: ThreeDimensionalPoint;
  metaData: PontMetaData;
};

export type ClusterInfo = {
  readonly id: string;
  readonly eventIds: readonly string[];
};

export type PointColor = PointsProps["pointProps"]["color"];
