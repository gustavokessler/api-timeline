/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { from, map } from 'rxjs';
import { Professor } from 'src/professor/professor.entity';
import { constants } from 'src/shared/constants/constants';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  
  constructor(
    @Inject(constants.PROFESSOR_REPOSITORY)
    private professorRepository: Repository<Professor>
  ){}

  login(email: string, password: string) {
    return true;
  }

  createAccount(email: string, password: string, nome: string){
    const professor = this.professorRepository.create({
      email,
      password,
      nome
    })

    console.log(professor);
    return from(this.professorRepository.insert(professor)).pipe(
      map((result) => {
        return result.generatedMaps
      })
    );
  }
}
