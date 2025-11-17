import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, X } from 'lucide-react';
import { useGame } from '../contexts/GameContext';

export default function AchievementToast() {
  const { recentAchievements } = useGame();

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2">
      <AnimatePresence>
        {recentAchievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-lg shadow-2xl max-w-sm"
          >
            <div className="flex items-start gap-3">
              <div className="text-4xl">{achievement.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy size={16} />
                  <h3 className="font-bold text-sm">Achievement Unlocked!</h3>
                </div>
                <p className="font-semibold">{achievement.name}</p>
                <p className="text-xs text-white/90 mt-1">{achievement.description}</p>
                <p className="text-xs font-bold mt-1">+{achievement.xpReward} XP</p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
