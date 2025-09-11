from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from app.auth.security import get_password_hash

from .repository import UserRepository
from .models import User
from .schemas import UserCreate


async def create_user_service(session: AsyncSession, user_data: UserCreate) -> User:
    if await UserRepository.get_user_by_email(session, str(user_data.email)):
        raise HTTPException(409, "Email уже зарегистрирован")
    if await UserRepository.get_user_by_username(session, user_data.username):
        raise HTTPException(409, "Имя пользователя уже занято")
    if len(user_data.password) < 8:
        raise HTTPException(400, "Пароль должен содержать не менее 8 символов")

    user = User(
        email=str(user_data.email),
        hashed_password=get_password_hash(user_data.password),
        username=user_data.username,
        first_name=user_data.first_name,
        last_name=user_data.last_name,
        avatar_url=user_data.avatar_url,
    )

    return await UserRepository.create_user(session, user)
