import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MainScreen } from '../components/main/MainScreen';
import { SkillsScreen } from '../components/skills/SkillsScreen';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainScreen />} />
                <Route path='skills' element={<SkillsScreen />} />
            </Routes>
        </Router>
    );
}
