import top from "../assets/wr_champ/icon/shen.png";
import jungle from "../assets/wr_champ/icon/lee_sin.png";
import mid from "../assets/wr_champ/icon/ahri.png";
import adc from "../assets/wr_champ/icon/lucian_icon.png";
import support from "../assets/wr_champ/icon/thresh_icon.png";

import shen from "../assets/wr_champ/square_champ/whiz/Shen_OriginalSquare_WR.png";
import aatrox from "../assets/wr_champ/square_champ/whiz/Aatrox_OriginalSquare_WR.png";
import urgot from "../assets/wr_champ/square_champ/whiz/Urgot_OriginalSquare_WR.png";

import leeSin from "../assets/wr_champ/square_champ/lombos/Lee_Sin_OriginalSquare_WR.png";
import jarvan from "../assets/wr_champ/square_champ/lombos/Jarvan_IV_OriginalSquare_WR.png";
import vi from "../assets/wr_champ/square_champ/lombos/Vi_OriginalSquare_WR.png";

import ahri from "../assets/wr_champ/square_champ/gat/Ahri_OriginalSquare_WR.png";
import ryze from "../assets/wr_champ/square_champ/gat/Ryze_OriginalSquare_WR.png";
import galio from "../assets/wr_champ/square_champ/gat/Galio_OriginalSquare_WR.png";

import lucian from "../assets/wr_champ/square_champ/torres/Lucian_OriginalSquare_WR.png";
import vayne from "../assets/wr_champ/square_champ/torres/Vayne_OriginalSquare_WR.png";
import jhin from "../assets/wr_champ/square_champ/torres/Jhin_OriginalSquare_WR.png";

import thresh from "../assets/wr_champ/square_champ/melowe/Thresh_OriginalSquare_WR.png";
import nami from "../assets/wr_champ/square_champ/melowe/Nami_OriginalSquare_WR.png";
import lulu from "../assets/wr_champ/square_champ/melowe/Lulu_OriginalSquare_WR.png";

import diamond from "../assets/wr_champ/rank_tier/diamond.webp";
import grandmaster from "../assets/wr_champ/rank_tier/grandmaster.webp";
import challenger from "../assets/wr_champ/rank_tier/challenger.webp";

export const PLAYERS = [
  {
    id: 1,
    gameName: "SYNCRO",
    realName: "Whiz Villamor",
    role: "Top",
    rank: diamond,
    avatar: top,
    stats: {
      winRate: "59.1%",
      kda: "3.8",
      tp: "53.2%",
      gpm: "866",
      cddpm: "24,810",
      cdtm: "21,613",
      tdm: "3,503",
      mainChampions: [shen, aatrox, urgot],
    },
    achievements: ["Tank Specialist", "Initiator Extraordinaire"],
  },
  {
    id: 2,
    gameName: "MORTIFER",
    realName: "Heinrich Lombos",
    role: "Jungle",
    rank: challenger,
    avatar: jungle,
    stats: {
      winRate: "62.6%",
      kda: "6.8",
      tp: "53.2%",
      gpm: "866",
      cddpm: "24,810",
      cdtm: "21,613",
      tdm: "3,503",
      mainChampions: [leeSin, jarvan, vi],
    },
    achievements: ["Objective Shotcaller", "Jungle Dominator"],
  },
  {
    id: 3,
    gameName: "SPARDA",
    realName: "Lester John Gatpolintan",
    role: "Mid",
    rank: grandmaster,
    avatar: mid,
    stats: {
      winRate: "63.4%",
      kda: "6.2",
      tp: "53.2%",
      gpm: "866",
      cddpm: "24,810",
      cdtm: "21,613",
      tdm: "3,503",
      mainChampions: [ahri, ryze, galio],
    },
    achievements: ["Mage Maniac", "Clutch Master"],
  },
  {
    id: 4,
    gameName: "PLAYHARD",
    realName: "Josh Philip Torres",
    role: "AD Carry",
    rank: grandmaster,
    avatar: adc,
    stats: {
      winRate: "53.8%",
      kda: "4.8",
      tp: "53.2%",
      gpm: "866",
      cddpm: "24,810",
      cdtm: "21,613",
      tdm: "3,503",
      mainChampions: [lucian, vayne, jhin],
    },
    achievements: ["Phantom Kiter", "Auto Attack Architect"],
  },
  {
    id: 5,
    gameName: "FRAIL",
    realName: "John Remil Grafil",
    role: "Support",
    rank: grandmaster,
    avatar: support,
    stats: {
      winRate: "54.5%",
      kda: "3.8",
      tp: "53.2%",
      gpm: "866",
      cddpm: "24,810",
      cdtm: "21,613",
      tdm: "3,503",
      mainChampions: [thresh, nami, lulu],
    },
    achievements: ["Vision Controller", "Team Savior"],
  },
];
